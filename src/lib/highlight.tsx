import { Fragment } from 'react';

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function Highlight({ text, terms }: { text: string; terms: string[] }) {
  const pattern = new RegExp(`(${[...terms].sort((a, b) => b.length - a.length).map(escapeRegExp).join('|')})`, 'g');
  return (
    <>
      {text.split(pattern).map((part, i) =>
        terms.includes(part) ? (
          <span key={i} className="text-primary font-semibold">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
