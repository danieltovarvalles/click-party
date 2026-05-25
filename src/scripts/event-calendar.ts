import { FATHER_DAY_EVENT } from "../data/fatherDayEvent";
import { trackGtagEvent } from "../utils/gtag";

export function initEventCalendar() {
  const link = document.getElementById("event-calendar-btn");
  if (!(link instanceof HTMLAnchorElement)) return;
  if (link.dataset.calendarBound === "true") return;
  link.dataset.calendarBound = "true";

  link.addEventListener("click", () => {
    trackGtagEvent("event_calendar_click", {
      event_name: FATHER_DAY_EVENT.slug,
    });
  });
}

initEventCalendar();
document.addEventListener("astro:page-load", initEventCalendar);
