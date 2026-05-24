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

const startupFooterItems: NavItem[] = startups.flatMap((startup) =>
  startup.mainPageUrl
    ? [
        {
          label: startup.name,
          href: startup.mainPageUrl,
          openOnNewTab: true,
        },
      ]
    : [],
);

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/#hero" },
  { label: "Servicios", href: "/#startups" },
  { label: "Nosotros", href: "/#why-click-party" },
  { label: "Eventos", href: "/#next-event" },
  { label: "Categorías", href: "/#categories" },
];

export const footerNav: FooterNavItem[] = [
  { title: "Categorias", items: categoryFooterItems },
  { title: "Servicios", items: startupFooterItems },
  { title: "Información", items: [
    { label: "Nosotros", href: "/informacion#nosotros" },
    // { label: "Contacto", href: "/informacion#contacto" },
    { label: "Preguntas Frecuentes", href: "/informacion#preguntasFrecuentes" },
    // { label: "Política de Privacidad", href: "informacion#politicaDePrivacidad" },
    // { label: "Términos y Condiciones", href: "informacion#terminosYCondiciones" },
  ]},
];