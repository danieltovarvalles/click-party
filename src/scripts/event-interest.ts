import { FATHER_DAY_EVENT } from "../data/fatherDayEvent";
import { trackGtagEvent } from "../utils/gtag";

const STORAGE_KEY = "event-interest-dia-padre-2026";

function setInterestedState(button: HTMLButtonElement, interested: boolean) {
  button.disabled = interested;
  button.setAttribute("aria-disabled", String(interested));
  button.textContent = interested ? "Te esperamos " : "Me interesa";
}

function isInterested(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function markInterested() {
  try {
    localStorage.setItem(STORAGE_KEY, "true");
  } catch {
    /* modo privado o storage bloqueado */
  }
}

function trackInterest() {
  trackGtagEvent("event_interest_click", {
    event_name: FATHER_DAY_EVENT.slug,
  });
}

export function initEventInterest() {
  const button = document.getElementById("event-interest-btn");
  if (!(button instanceof HTMLButtonElement)) return;

  setInterestedState(button, isInterested());

  if (button.dataset.interestBound === "true") return;
  button.dataset.interestBound = "true";

  button.addEventListener("click", () => {
    if (button.disabled) return;
    trackInterest();
    markInterested();
    setInterestedState(button, true);
  });
}

initEventInterest();
document.addEventListener("astro:page-load", initEventInterest);
