// Rich text helpers. Pure JS (no React) so scripts/seed-sanity.mjs can share them.
//
// Built-in content is written as plain strings with a tiny markup:
//   **bold**    ==green highlight==
// Sanity stores the same thing as Portable Text blocks. toBlocks() turns either
// into Portable Text so the site has a single rendering path.

const TOKEN = /(\*\*|==)/;

export function markupToBlocks(text, keyBase = 'b') {
  const children = [];
  const marks = new Set();
  let n = 0;
  for (const part of String(text).split(TOKEN)) {
    if (part === '**') toggle(marks, 'strong');
    else if (part === '==') toggle(marks, 'highlight');
    else if (part) children.push({ _type: 'span', _key: `${keyBase}s${n++}`, text: part, marks: [...marks] });
  }
  return [{ _type: 'block', _key: keyBase, style: 'normal', markDefs: [], children }];
}

function toggle(set, mark) {
  if (set.has(mark)) set.delete(mark);
  else set.add(mark);
}

// string | string[] | block | block[] | null  ->  block[]  (one block per array item)
export function toBlocks(value, keyBase = 'r') {
  if (value == null) return [];
  const list = Array.isArray(value) ? value : [value];
  return list.flatMap((item, i) => {
    if (item == null) return [];
    return typeof item === 'string' ? markupToBlocks(item, `${keyBase}${i}`) : [item];
  });
}
