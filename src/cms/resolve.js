// Merges a Sanity document over the built-in defaults, field by field.
//
//  - No document (not created yet, offline, CMS not configured): all defaults.
//  - A field the editor left blank: that field's default.
//  - `groups`: fields that only make sense together (e.g. a heading and its
//    highlighted part, or the address lines). If the editor filled in ANY field
//    of a group, the whole group comes from Sanity as-is, so clearing one of
//    them really clears it. The defaults apply only when ALL are blank.
export const isBlank = (v) =>
  v == null || (typeof v === 'string' && v.trim() === '') || (Array.isArray(v) && v.length === 0);

export function resolve(doc, defaults, groups = []) {
  if (!doc) return { ...defaults };
  const out = { ...doc };
  const grouped = new Set(groups.flat());

  for (const [key, fallback] of Object.entries(defaults)) {
    if (!grouped.has(key) && isBlank(doc[key])) out[key] = fallback;
  }
  for (const group of groups) {
    if (group.every((key) => isBlank(doc[key]))) {
      for (const key of group) out[key] = defaults[key];
    }
  }
  return out;
}

// Sections default to visible; an editor switches them off with a toggle.
export const isShown = (flag) => flag !== false;

// "View All {count} Services" -> "View All 12 Services"
export const fill = (text, values) =>
  String(text ?? '').replace(/\{(\w+)\}/g, (match, key) => (values[key] != null ? values[key] : match));
