import { Document, Font, Link, Page, StyleSheet, Text, View, renderToFile } from '@react-pdf/renderer';
import { fileURLToPath } from 'node:url';
import { header, outputPath, sections, type Block } from './content.ts';

const ACCENT = '#0b5d3b';

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: { paddingVertical: 28, paddingHorizontal: 36, fontFamily: 'Helvetica', fontSize: 9, lineHeight: 1.35, color: '#111' },
  name: { fontFamily: 'Helvetica-Bold', fontSize: 20, lineHeight: 1.2, color: ACCENT },
  headline: { fontSize: 10.5, marginTop: 2 },
  contact: { marginTop: 4 },
  links: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 2 },
  link: { color: ACCENT, textDecoration: 'none' },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10.5,
    color: ACCENT,
    marginTop: 8,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottomWidth: 0.75,
    borderBottomColor: ACCENT,
    textTransform: 'uppercase',
  },
  entry: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4, marginBottom: 1 },
  entryTitle: { fontFamily: 'Helvetica-Bold', fontSize: 9.5 },
  entryDates: { fontFamily: 'Helvetica-Bold' },
  subtitle: { fontFamily: 'Helvetica-Oblique', marginBottom: 1 },
  text: { marginBottom: 2 },
  bullet: { flexDirection: 'row', marginBottom: 1 },
  bulletMark: { width: 10 },
  bulletText: { flex: 1 },
  pairLabel: { fontFamily: 'Helvetica-Bold' },
});

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'entry':
      return (
        <View wrap={false} minPresenceAhead={24}>
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>{block.title}</Text>
            <Text style={styles.entryDates}>{block.dates}</Text>
          </View>
          {block.subtitle && <Text style={styles.subtitle}>{block.subtitle}</Text>}
        </View>
      );
    case 'text':
      return <Text style={styles.text}>{block.text}</Text>;
    case 'pair':
      return (
        <Text style={styles.text}>
          <Text style={styles.pairLabel}>{block.label}: </Text>
          {block.text}
        </Text>
      );
    case 'bullet':
      return (
        <View style={styles.bullet} wrap={false}>
          <Text style={styles.bulletMark}>•</Text>
          {block.url ? (
            <Link src={block.url} style={[styles.bulletText, { color: '#111', textDecoration: 'none' }]}>
              {block.text}
            </Link>
          ) : (
            <Text style={styles.bulletText}>{block.text}</Text>
          )}
        </View>
      );
  }
}

function ResumeDocument() {
  return (
    <Document title={`${header.name} - Resume`} author={header.name} subject={header.headline} keywords={header.headline} creator={header.name} producer={header.name}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{header.name}</Text>
        <Text style={styles.headline}>{header.headline}</Text>
        <Text style={styles.contact}>{header.contact}</Text>
        <View style={styles.links}>
          {header.links.map((link, idx) => (
            <Text key={link.url}>
              <Link src={link.url} style={styles.link}>
                {link.text}
              </Link>
              {idx < header.links.length - 1 ? ' | ' : ''}
            </Text>
          ))}
        </View>
        {sections.map((section) => (
          <View key={section.title}>
            <Text style={styles.sectionTitle} minPresenceAhead={40}>
              {section.title}
            </Text>
            {section.blocks.map((block, idx) => (
              <BlockView key={idx} block={block} />
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}

await renderToFile(<ResumeDocument />, fileURLToPath(outputPath('pdf')));
console.log(`PDF written to ${fileURLToPath(outputPath('pdf'))}`);
