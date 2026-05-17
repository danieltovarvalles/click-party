import { categories } from "./Categories";
import { startups } from "./Startups";

export type NavItem = {
  label: string;
  href: string;
  openOnNewTab?: boolean;
};

export type FooterNavItem = {
  title: string;
  items: NavItem[];
};

const categoryFooterItems: NavItem[] = categories.map((category) => ({
  label: category.name,
  // href: category.url,
  href: '/#categories',
}));

const startupFooterItems: NavItem[] = startups.map((startup) => ({
  label: startup.name,
  href: startup.mainPageUrl,
  openOnNewTab: true,
}));

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/#hero" },
  { label: "Servicios", href: "/#startups" },
  { label: "Nosotros", href: "/#why-click-party" },
  { label: "Eventos", href: "/#next-event" },
  { label: "Categorías", href: "/#categories" },
];

export const footerNav: FooterNavItem[] = [
  { title: "Servicios", items: startupFooterItems },
  { title: "Categorias", items: categoryFooterItems },
  { title: "Información", items: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Consejos para tu evento", href: "/blog" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Política de Privacidad", href: "/politica-de-privacidad" },
    { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
  ]},
];