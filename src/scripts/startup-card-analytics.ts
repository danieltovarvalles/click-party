import { trackGtagEvent } from "../utils/gtag";

function handleStartupTrackClick(event: MouseEvent) {
  const target = (event.target as HTMLElement).closest("[data-track-event]");
  if (!(target instanceof HTMLElement)) return;

  const eventName = target.dataset.trackEvent;
  const providerId = target.dataset.providerId;
  if (!eventName) return;

  trackGtagEvent(eventName, {
    provider_id: providerId ?? "",
  });
}

export function initStartupCardAnalytics() {
  document.removeEventListener("click", handleStartupTrackClick);
  document.addEventListener("click", handleStartupTrackClick);
}

initStartupCardAnalytics();
document.addEventListener("astro:page-load", initStartupCardAnalytics);
