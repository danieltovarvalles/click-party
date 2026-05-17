const AUTO_SPEED = 0.45;
const RESUME_DELAY_MS = 500;

function initStartupsCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>("[data-startups-track]");
  if (!track) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let setWidth = 0;
  let isPaused = prefersReducedMotion;
  let hoverCount = 0;
  let resumeTimeout = 0;
  let rafId = 0;

  const measure = () => {
    const total = track.scrollWidth;
    if (total <= 0) return;
    setWidth = total / 3;
    if (track.scrollLeft < setWidth * 0.25 || track.scrollLeft > setWidth * 1.75) {
      track.scrollLeft = setWidth;
    }
  };

  const normalizeScroll = () => {
    if (setWidth <= 0) return;
    if (track.scrollLeft >= setWidth * 2 - 2) {
      track.scrollLeft -= setWidth;
    } else if (track.scrollLeft <= 2) {
      track.scrollLeft += setWidth;
    }
  };

  const pause = () => {
    isPaused = true;
    window.clearTimeout(resumeTimeout);
  };

  const canAutoScroll = () => !prefersReducedMotion && hoverCount === 0;

  const scheduleResume = () => {
    window.clearTimeout(resumeTimeout);
    resumeTimeout = window.setTimeout(() => {
      isPaused = !canAutoScroll();
    }, RESUME_DELAY_MS);
  };

  const bindHoverPause = () => {
    track.querySelectorAll("[data-startup-slide]").forEach((slide) => {
      slide.addEventListener("mouseenter", () => {
        hoverCount += 1;
        pause();
      });
      slide.addEventListener("mouseleave", () => {
        hoverCount = Math.max(0, hoverCount - 1);
        if (hoverCount === 0) {
          scheduleResume();
        }
      });
    });
  };

  const tick = () => {
    if (!isPaused && setWidth > 0) {
      track.scrollLeft += AUTO_SPEED;
      normalizeScroll();
    }
    rafId = window.requestAnimationFrame(tick);
  };

  track.addEventListener(
    "touchstart",
    () => pause(),
    { passive: true },
  );

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
      normalizeScroll();
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
