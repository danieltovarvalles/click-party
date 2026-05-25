export const FATHER_DAY_EVENT = {
  slug: "dia_del_padre_2026",
  title: "Click & Party - Día del Padre",
  start: "20260621T160000",
  end: "20260621T200000",
  timezone: "America/Monterrey",
  location: "Torreón, Coahuila",
  details: `Evento para conocer emprendimientos locales.

• Sorteos cada media hora
• Actividades infantiles
• Muestras gratis
• Tómbola
• Exposición de emprendedores`,
} as const;

export function buildGoogleCalendarUrl(
  event: typeof FATHER_DAY_EVENT = FATHER_DAY_EVENT,
): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${event.start}/${event.end}`,
    details: event.details,
    location: event.location,
    ctz: event.timezone,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
