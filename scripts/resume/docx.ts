import { AlignmentType, Document, ExternalHyperlink, Packer, Paragraph, TabStopType, TextRun, BorderStyle } from 'docx';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { header, outputPath, sections, type Block } from './content.ts';

const FONT = 'Calibri';
const ACCENT = '0B5D3B';
const RIGHT_TAB = 10466;

const hyperlink = (text: string, url: string) =>
  new ExternalHyperlink({ link: url, children: [new TextRun({ text, style: 'Hyperlink' })] });

const blockParagraphs = (block: Block): Paragraph[] => {
  switch (block.type) {
    case 'entry':
      return [
        new Paragraph({
          spacing: { before: 120 },
          tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
          children: [new TextRun({ text: block.title, bold: true }), new TextRun({ text: `\t${block.dates}`, bold: true })],
        }),
        ...(block.subtitle ? [new Paragraph({ children: [new TextRun({ text: block.subtitle, italics: true })] })] : []),
      ];
    case 'text':
      return [new Paragraph({ spacing: { after: 60 }, children: [new TextRun(block.text)] })];
    case 'pair':
      return [new Paragraph({ children: [new TextRun({ text: `${block.label}: `, bold: true }), new TextRun(block.text)] })];
    case 'bullet':
      return [
        new Paragraph({
          bullet: { level: 0 },
          children: [block.url ? hyperlink(block.text, block.url) : new TextRun(block.text)],
        }),
      ];
  }
};

const headerLinks = header.links.flatMap((link, idx) => [
  hyperlink(link.text, link.url),
  ...(idx < header.links.length - 1 ? [new TextRun(' | ')] : []),
]);

const document = new Document({
  creator: header.name,
  title: `${header.name} - Resume`,
  description: header.headline,
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  sections: [
    {
      properties: { page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } } },
      children: [
        new Paragraph({ children: [new TextRun({ text: header.name, bold: true, size: 40, color: ACCENT })] }),
        new Paragraph({ children: [new TextRun({ text: header.headline, size: 22 })] }),
        new Paragraph({ children: [new TextRun(header.contact)] }),
        new Paragraph({ alignment: AlignmentType.LEFT, children: headerLinks }),
        ...sections.flatMap((section) => [
          new Paragraph({
            spacing: { before: 240, after: 80 },
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 1 } },
            children: [new TextRun({ text: section.title.toUpperCase(), bold: true, color: ACCENT, size: 22 })],
          }),
          ...section.blocks.flatMap(blockParagraphs),
        ]),
      ],
    },
  ],
});

await writeFile(outputPath('docx'), await Packer.toBuffer(document));
console.log(`DOCX written to ${fileURLToPath(outputPath('docx'))}`);
