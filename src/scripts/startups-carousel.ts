const AUTO_SPEED = 0.45;
const RESUME_DELAY_MS = 0;

function initStartupsCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>("[data-startups-track]");
  if (!track) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let setWidth = 0;
  let isPaused = prefersReducedMotion;
  let isPositioned = false;
  let isAutoScrolling = false;
  let resumeTimeout = 0;
  let rafId = 0;

  const scrollToInstant = (left: number) => {
    track.style.scrollBehavior = "auto";
    track.scrollLeft = left;
  };

  const normalizeScroll = () => {
    if (setWidth <= 0) return;
    if (track.scrollLeft >= setWidth * 2 - 2) {
      scrollToInstant(track.scrollLeft - setWidth);
    } else if (track.scrollLeft <= 2) {
      scrollToInstant(track.scrollLeft + setWidth);
    }
  };

  const ensureInitialPosition = () => {
    if (setWidth <= 0 || isPositioned) return;
    scrollToInstant(setWidth);
    isPositioned = true;
  };

  const measure = () => {
    const total = track.scrollWidth;
    if (total <= 0) return;

    const beforeLeft = track.scrollLeft;
    const prevSetWidth = setWidth;
    setWidth = total / 3;

    if (!isPositioned) {
      ensureInitialPosition();
    } else if (prevSetWidth > 0 && Math.abs(prevSetWidth - setWidth) > 1) {
      const ratio = beforeLeft / prevSetWidth;
      scrollToInstant(ratio * setWidth);
      normalizeScroll();
    }
  };

  const pause = () => {
    isPaused = true;
    window.clearTimeout(resumeTimeout);
  };

  const scheduleResume = () => {
    window.clearTimeout(resumeTimeout);
    resumeTimeout = window.setTimeout(() => {
      isPaused = prefersReducedMotion;
    }, RESUME_DELAY_MS);
  };

  const bindHoverPause = () => {
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", scheduleResume);
  };

  const tick = () => {
    if (!isPaused && setWidth > 0 && isPositioned) {
      isAutoScrolling = true;
      track.scrollLeft += AUTO_SPEED;
      normalizeScroll();
      isAutoScrolling = false;
    }
    rafId = window.requestAnimationFrame(tick);
  };

  track.addEventListener("touchstart", pause, { passive: true });

  track.addEventListener(
    "touchend",
    () => {
      normalizeScroll();
      scheduleResume();
    },
    { passive: true },
  );

  track.addEventListener(
    "touchcancel",
    () => {
      normalizeScroll();
      scheduleResume();
    },
    { passive: true },
  );

  track.addEventListener(
    "scroll",
    () => {
      if (!isAutoScrolling) {
        normalizeScroll();
      }
    },
    { passive: true },
  );

  track.addEventListener(
    "wheel",
    () => {
      pause();
      scheduleResume();
    },
    { passive: true },
  );

  const resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(track);

  const images = track.querySelectorAll("img");
  images.forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", measure, { once: true });
    }
  });

  measure();
  bindHoverPause();
  window.requestAnimationFrame(() => {
    measure();
    tick();
  });

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        pause();
      } else {
        scheduleResume();
      }
    },
    { passive: true },
  );

  root.addEventListener(
    "astro:beforeunload",
    () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(resumeTimeout);
      resizeObserver.disconnect();
    },
    { once: true },
  );
}

document
  .querySelectorAll<HTMLElement>("[data-startups-carousel]")
  .forEach(initStartupsCarousel);
