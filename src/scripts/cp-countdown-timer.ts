function pad(value: number) {
  return String(value).padStart(2, "0");
}

const UNITS = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
] as const;

function buildShadowHtml() {
  const unitsHtml = UNITS.map(
    ({ key, label }) => `
      <div class="unit">
        <span class="value" data-unit="${key}">00</span>
        <span class="label">${label}</span>
      </div>`,
  ).join("");

  return `
  <style>
    :host { display: block; width: 100%; }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    @media (min-width: 1024px) {
      .grid { grid-template-columns: repeat(4, 1fr); }
    }
    .unit {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0.75rem;
      border: 2px solid #e5e5e5;
      background: #fafafa;
      padding: 1rem 0.5rem;
    }
    .value {
      font-size: 1.875rem;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
      color: #2e2f2f;
    }
    @media (min-width: 768px) {
      .value { font-size: 2.25rem; }
    }
    .label {
      margin-top: 0.25rem;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #f43f5e;
    }
    @media (min-width: 768px) {
      .label { font-size: 0.75rem; }
    }
  </style>
  <div class="grid" role="timer" aria-label="Cuenta regresiva para el evento">
    ${unitsHtml}
  </div>`;
}

class CpCountdownTimer extends HTMLElement {
  #interval: number | undefined;

  connectedCallback() {
    if (this.dataset.cpRunning === "1") return;
    this.dataset.cpRunning = "1";

    const targetIso = this.dataset.target;
    if (!targetIso) return;

    const target = new Date(targetIso);
    if (Number.isNaN(target.getTime())) return;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = buildShadowHtml();

    const els = {
      days: shadow.querySelector('[data-unit="days"]'),
      hours: shadow.querySelector('[data-unit="hours"]'),
      minutes: shadow.querySelector('[data-unit="minutes"]'),
      seconds: shadow.querySelector('[data-unit="seconds"]'),
    };

    const update = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (els.days) els.days.textContent = pad(days);
      if (els.hours) els.hours.textContent = pad(hours);
      if (els.minutes) els.minutes.textContent = pad(minutes);
      if (els.seconds) els.seconds.textContent = pad(seconds);
    };

    update();
    this.#interval = window.setInterval(update, 1000);
  }

  disconnectedCallback() {
    if (this.#interval !== undefined) {
      window.clearInterval(this.#interval);
    }
  }
}

if (!customElements.get("cp-countdown-timer")) {
  customElements.define("cp-countdown-timer", CpCountdownTimer);
}
