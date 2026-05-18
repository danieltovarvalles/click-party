import { getScrollRoot, getScrollTop, getSectionIdFromHref, HEADER_OFFSET } from "./scroll-utils";

function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const section = document.getElementById(id);
  const scrollRoot = getScrollRoot();
  if (!section) return;

  const sectionTop =
    section.getBoundingClientRect().top + getScrollTop(scrollRoot);
  const targetTop = Math.max(0, sectionTop - HEADER_OFFSET);

  scrollRoot.scrollTo({ top: targetTop, behavior });
}

function isHomePath(pathname: string) {
  return (
    pathname === "/" ||
    pathname.endsWith("/index.html")
  );
}

function isSamePageNavigation(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return false;

  const path = href.slice(0, hashIndex) || "/";
  const targetPath = path === "" ? "/" : path;
  const currentPath = window.location.pathname;

  return (
    targetPath === currentPath ||
    (isHomePath(targetPath) && isHomePath(currentPath))
  );
}

function closeMobileMenu() {
  const header = document.querySelector<HTMLElement>("[data-scroll-spy]");
  if (!header) return;

  const panel = header.querySelector<HTMLElement>("[data-nav-panel]");
  const toggle = header.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  if (!panel || !toggle) return;

  panel.dataset.open = "false";
  toggle.setAttribute("aria-expanded", "false");
}

function handleAnchorClick(event: MouseEvent) {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
    "a[href*='#']",
  );
  if (!link) return;

  const href = link.getAttribute("href") ?? "";
  const sectionId = getSectionIdFromHref(href);
  if (!sectionId) return;

  if (!isSamePageNavigation(href)) return;

  const section = document.getElementById(sectionId);
  if (!section) return;

  event.preventDefault();

  const hashIndex = href.indexOf("#");
  const path = href.slice(0, hashIndex) || "/";
  history.pushState(null, "", `${path}#${sectionId}`);
  scrollToSection(sectionId);
  closeMobileMenu();
}

let anchorNavigationInitialized = false;

export function initPageAnchorNavigation() {
  if (anchorNavigationInitialized) return;
  anchorNavigationInitialized = true;
  document.addEventListener("click", handleAnchorClick);
}

function initMenuToggle(header: HTMLElement) {
  const toggle = header.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = header.querySelector<HTMLElement>("[data-nav-panel]");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = panel.dataset.open === "true";
    panel.dataset.open = String(!isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  document.addEventListener("click", (event) => {
    if (panel.dataset.open !== "true") return;
    if (header.contains(event.target as Node)) return;
    closeMobileMenu(header);
  });
}

export function scrollToHashOnLoad() {
  const hash = window.location.hash.slice(1);
  if (!hash || !document.getElementById(hash)) return;

  requestAnimationFrame(() => {
    scrollToSection(hash, "auto");
  });
}

export function initHeader(header: HTMLElement) {
  initMenuToggle(header);
}
