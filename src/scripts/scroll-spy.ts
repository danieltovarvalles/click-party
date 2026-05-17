const HEADER_OFFSET = 96;

function getSectionIdFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1);
}

function initScrollSpy(header: HTMLElement) {
  const isHome =
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/index.html");

  if (!isHome) return;

  const links = [
    ...header.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"),
  ];

  const sectionIds = links
    .map((link) => getSectionIdFromHref(link.getAttribute("href") ?? ""))
    .filter((id): id is string => Boolean(id));

  if (sectionIds.length === 0) return;

  const setActive = (id: string) => {
    links.forEach((link) => {
      const linkSectionId = getSectionIdFromHref(link.getAttribute("href") ?? "");
      const isActive = linkSectionId === id;

      link.classList.toggle("text-primary", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const isNearPageBottom = () => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    return docHeight - scrollBottom <= 120;
  };

  const updateActiveSection = () => {
    if (isNearPageBottom()) {
      setActive(sectionIds[sectionIds.length - 1]);
      return;
    }

    let currentId = sectionIds[0];

    for (let i = 0; i < sectionIds.length; i++) {
      const id = sectionIds[i];
      const section = document.getElementById(id);
      if (!section) continue;

      const { top } = section.getBoundingClientRect();
      const nextSection = document.getElementById(sectionIds[i + 1] ?? "");
      const nextTop = nextSection?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;

      // Activa la sección cuyo inicio ya pasó el header y la siguiente aún no
      if (top <= HEADER_OFFSET && nextTop > HEADER_OFFSET) {
        currentId = id;
        break;
      }

      if (top <= HEADER_OFFSET) {
        currentId = id;
      }
    }

    setActive(currentId);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveSection();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateActiveSection, { passive: true });

  if (window.location.hash) {
    const hashId = window.location.hash.slice(1);
    if (sectionIds.includes(hashId)) {
      setActive(hashId);
    }
  }

  updateActiveSection();
}

document.querySelectorAll<HTMLElement>("[data-scroll-spy]").forEach(initScrollSpy);
