export function initHeaderMenu(header: HTMLElement) {
  const toggle = header.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = header.querySelector<HTMLElement>("[data-nav-panel]");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = panel.dataset.open === "true";
    panel.dataset.open = String(!isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  document.addEventListener("click", (event) => {
    if (panel.dataset.open !== "true") return;
    if (header.contains(event.target as Node)) return;
    panel.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
  });
}
