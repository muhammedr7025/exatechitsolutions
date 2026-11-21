// Shared page-scroll lock for overlays (mobile menu, portfolio preview).
// Counted, so two overlays can't unlock each other, and it always restores the
// stylesheet's own value (body has overflow-x: hidden) instead of forcing one.
let locks = 0;

export function lockScroll() {
  locks += 1;
  if (locks === 1) document.body.style.overflow = 'hidden';
  let released = false;
  return () => {
    if (released) return;
    released = true;
    locks = Math.max(0, locks - 1);
    if (locks === 0) document.body.style.overflow = '';
  };
}
