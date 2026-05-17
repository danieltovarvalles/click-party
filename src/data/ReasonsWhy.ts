import UserSearch from "../assets/icons/UserSearch.astro";
import HandShake from "../assets/icons/HandShake.astro";
import Presentation from "../assets/icons/Presentation.astro";
export type CategoryColor =
  | "red"
  | "yellow"
  | "blue"
  | "orange"
  | "green"
  | "purple"
  | "pink"
  | "cyan";

export const reasonsWhy = [
  {
    id: 1,
    title: "Sabemos lo dificil que puede ser",
    icon: UserSearch,
    color: "green",
    description: "Encontrar proveedores confiables y coordinar cada detalle de tu evento toma tiempo y puede ser agotador.",
  },
  {
    id: 2,
    title: "Por eso creamos Click & Party",
    icon: HandShake,
    color: "red",
    description: "Un lugar donde puedes encontrar todo lo que necesitas para tu evento, desde decoraciones hasta alimentos y bebidas.",
  },
  {
    id: 3,
    title: "Apoyamos a los pequeños negocios",
    icon: Presentation,
    color: "yellow",
    description: "Damos visibilidad a los pequeños negocios y ayudamos a que crezcan y se desarrollen.",
  },
];
