/**
 * Navegación por secciones dentro de #page-scroll.
 *
 * El documento no hace scroll (html/body con overflow:hidden).
 * El navegador no debe manejar hashes: siempre scroll programático.
 *
 * Entre páginas: navegar SIN hash y guardar destino en sessionStorage.
 */
import {
  getScrollRoot,
  normalizePath,
  scrollToSection,
} from "./scroll-utils";

const STORAGE_KEY = "page-scroll-target";

type ParsedLink = {
  pathname: string;
  sectionId: string;
};

function currentPath() {
  return normalizePath(window.location.pathname);
}

function parseLink(href: string): ParsedLink | null {
  try {
    const url = new URL(href, window.location.href);
    const sectionId = url.hash ? decodeURIComponent(url.hash.slice(1)) : "";
    if (!sectionId) return null;
    return {
      pathname: normalizePath(url.pathname),
      sectionId,
    };
  } catch {
    return null;
  }
}

function isInternalHashLink(link: HTMLAnchorElement) {
  if (link.target === "_blank") return false;
  const href = link.getAttribute("href");
  return Boolean(href?.includes("#"));
}

function resetScroll() {
  getScrollRoot().scrollTop = 0;
}

function updateUrl(pathname: string, sectionId: string, replace = false) {
  const url = `${pathname}#${sectionId}`;
  if (replace) {
    history.replaceState(null, "", url);
  } else {
    history.pushState(null, "", url);
  }
}

function closeMobileMenu() {
  const panel = document.querySelector<HTMLElement>("[data-nav-panel]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  if (!panel || !toggle) return;
  panel.dataset.open = "false";
  toggle.setAttribute("aria-expanded", "false");
}

function whenSectionReady(sectionId: string, callback: () => void, attempt = 0) {
  const section = document.getElementById(sectionId);
  if (section && section.getBoundingClientRect().height > 0) {
    requestAnimationFrame(callback);
    return;
  }
  if (attempt >= 60) return;
  requestAnimationFrame(() => whenSectionReady(sectionId, callback, attempt + 1));
}

function goToSection(
  sectionId: string,
  options: {
    smooth?: boolean;
    highlight?: boolean;
    updateUrl?: boolean;
    replaceUrl?: boolean;
    pathname?: string;
    resetFirst?: boolean;
  } = {},
) {
  const path = options.pathname ?? currentPath();

  whenSectionReady(sectionId, () => {
    if (options.resetFirst) resetScroll();

    const scrolled = scrollToSection(sectionId, {
      smooth: options.smooth ?? true,
      highlight: options.highlight ?? true,
    });

    if (scrolled && options.updateUrl !== false) {
      updateUrl(path, sectionId, options.replaceUrl ?? false);
    }
  });
}

function navigateToPage(pathname: string, sectionId: string) {
  sessionStorage.setItem(STORAGE_KEY, sectionId);
  window.location.assign(pathname);
}

function onLinkClick(event: MouseEvent) {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
  if (!link || !isInternalHashLink(link)) return;

  const parsed = parseLink(link.getAttribute("href") ?? "");
  if (!parsed) return;

  event.preventDefault();

  if (parsed.pathname === currentPath()) {
    goToSection(parsed.sectionId, {
      smooth: true,
      updateUrl: true,
      replaceUrl: false,
      pathname: parsed.pathname,
    });
    closeMobileMenu();
    return;
  }

  navigateToPage(parsed.pathname, parsed.sectionId);
}

function resolveInitialSectionId(): string | null {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    sessionStorage.removeItem(STORAGE_KEY);
    return stored;
  }

  const hash = window.location.hash.slice(1);
  return hash ? decodeURIComponent(hash) : null;
}

function handleInitialScroll() {
  const sectionId = resolveInitialSectionId();
  if (!sectionId) return;

  if (window.location.hash) {
    history.replaceState(null, "", currentPath());
  }

  resetScroll();

  goToSection(sectionId, {
    smooth: false,
    highlight: true,
    updateUrl: true,
    replaceUrl: true,
    resetFirst: false,
  });
}

export function initPageScroll() {
  if (typeof window === "undefined") return;

  history.scrollRestoration = "manual";
  resetScroll();

  document.addEventListener("click", onLinkClick, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", handleInitialScroll, {
      once: true,
    });
  } else {
    handleInitialScroll();
  }
}
