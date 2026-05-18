export const HEADER_OFFSET = 96;

export function getScrollRoot(): HTMLElement {
  return document.getElementById("page-scroll") ?? document.documentElement;
}

export function getScrollTop(root: HTMLElement) {
  return root === document.documentElement ? window.scrollY : root.scrollTop;
}

export function getSectionIdFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1);
}
