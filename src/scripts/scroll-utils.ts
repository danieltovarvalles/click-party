export const HEADER_OFFSET = 96;

let activeScrollFrame: number | null = null;

export function getScrollRoot(): HTMLElement {
  return document.getElementById("page-scroll") ?? document.documentElement;
}

export function getScrollTop(root: HTMLElement) {
  return root === document.documentElement ? window.scrollY : root.scrollTop;
}

export function getHeaderOffset(): number {
  const header = document.querySelector<HTMLElement>("header");
  return header?.getBoundingClientRect().height ?? HEADER_OFFSET;
}

export function getSectionIdFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1);
}

export function normalizePath(pathname: string) {
  let path = pathname || "/";
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.endsWith("/index.html")) {
    path = path.slice(0, -"/index.html".length) || "/";
  }
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
}

/** Posición de scroll dentro de #page-scroll para una sección */
export function getTargetScrollTop(sectionId: string): number | null {
  const root = getScrollRoot();
  const section = document.getElementById(sectionId);
  if (!section) return null;

  const offset = getHeaderOffset();
  const rootRect = root.getBoundingClientRect();
  const sectionRect = section.getBoundingClientRect();
  const relativeTop = sectionRect.top - rootRect.top;

  return Math.max(0, root.scrollTop + relativeTop - offset);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2;
}

function getScrollDuration(distance: number) {
  return Math.min(1300, Math.max(700, distance * 0.55));
}

function pulseSection(section: HTMLElement) {
  section.classList.remove("scroll-target-pulse");
  void section.offsetWidth;
  section.classList.add("scroll-target-pulse");
  section.addEventListener(
    "animationend",
    () => section.classList.remove("scroll-target-pulse"),
    { once: true },
  );
}

export function scrollRootTo(
  targetTop: number,
  options: { smooth?: boolean; onComplete?: () => void } = {},
) {
  const scrollRoot = getScrollRoot();
  const startTop = getScrollTop(scrollRoot);
  const distance = Math.abs(targetTop - startTop);
  const smooth = options.smooth ?? true;

  if (activeScrollFrame !== null) {
    cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }

  if (distance < 2 || !smooth || prefersReducedMotion()) {
    scrollRoot.scrollTop = targetTop;
    options.onComplete?.();
    return;
  }

  const duration = getScrollDuration(distance);
  const startTime = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    scrollRoot.scrollTop = startTop + (targetTop - startTop) * easeInOutQuint(progress);

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(tick);
    } else {
      activeScrollFrame = null;
      options.onComplete?.();
    }
  };

  activeScrollFrame = requestAnimationFrame(tick);
}

export function scrollToSection(
  sectionId: string,
  options: { smooth?: boolean; highlight?: boolean } = {},
) {
  const section = document.getElementById(sectionId);
  const targetTop = getTargetScrollTop(sectionId);
  if (!section || targetTop === null) return false;

  scrollRootTo(targetTop, {
    smooth: options.smooth ?? true,
    onComplete:
      options.highlight === false ? undefined : () => pulseSection(section),
  });

  return true;
}
