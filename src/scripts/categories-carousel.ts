function initCategoriesCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>("[data-carousel-track]");
  const prevBtn = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
  const nextBtn = root.querySelector<HTMLButtonElement>("[data-carousel-next]");

  if (!track || !prevBtn || !nextBtn) return;

  const cards = () =>
    [...track.querySelectorAll<HTMLElement>(":scope > *")];

  let currentIndex = 0;
  let scrollSyncTimer: number | undefined;

  const getGap = () => {
    const gap = getComputedStyle(track).columnGap || getComputedStyle(track).gap;
    return Number.parseFloat(gap) || 24;
  };

  const getScrollLeftForIndex = (index: number) => {
    const items = cards();
    if (items.length === 0 || index <= 0) return 0;

    const gap = getGap();
    let left = 0;
    for (let i = 0; i < index; i++) {
      left += items[i].offsetWidth + gap;
    }
    return left;
  };

  const syncIndexFromScroll = () => {
    const items = cards();
    if (items.length === 0) return;

    const scrollLeft = track.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    items.forEach((card, index) => {
      const distance = Math.abs(getScrollLeftForIndex(index) - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    currentIndex = closestIndex;
  };

  const updateButtons = () => {
    const items = cards();
    const maxIndex = Math.max(0, items.length - 1);
    const atStart = currentIndex <= 0;
    const atEnd = currentIndex >= maxIndex;

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
    prevBtn.setAttribute("aria-disabled", String(atStart));
    nextBtn.setAttribute("aria-disabled", String(atEnd));
  };

  const scrollToIndex = (index: number) => {
    const items = cards();
    if (items.length === 0) return;

    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    track.scrollTo({
      left: getScrollLeftForIndex(currentIndex),
      behavior: "smooth",
    });
    updateButtons();
  };

  prevBtn.addEventListener("click", () => {
    scrollToIndex(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    scrollToIndex(currentIndex + 1);
  });

  track.addEventListener(
    "scroll",
    () => {
      window.clearTimeout(scrollSyncTimer);
      scrollSyncTimer = window.setTimeout(() => {
        syncIndexFromScroll();
        updateButtons();
      }, 80);
    },
    { passive: true },
  );

  window.addEventListener("resize", () => {
    syncIndexFromScroll();
    scrollToIndex(currentIndex);
  });

  syncIndexFromScroll();
  updateButtons();
}

document
  .querySelectorAll<HTMLElement>("[data-categories-carousel]")
  .forEach(initCategoriesCarousel);
