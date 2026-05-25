type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function trackGtagEvent(
  eventName: string,
  params?: Record<string, string>,
): void {
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }
}
