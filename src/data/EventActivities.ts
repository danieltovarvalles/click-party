import GiftCard from "../assets/icons/GiftCard.astro"
import Ticket from "../assets/icons/Ticket.astro"
import Toys from "../assets/icons/Toys.astro"
import Cake from "../assets/icons/Cake.astro"
import Store from "../assets/icons/Store.astro";

import ClickParty from "../assets/icons/ClickParty_Isotipo.astro"

import type { ActivityCardProps } from "../components/ActivityCard.astro";
import type { CategoryColor } from "../utils/colors";
import Confetti from "../assets/icons/Confetti.astro";

export type { CategoryColor };

export const eventActivities: ActivityCardProps["activity"][] = [
  {
    id: 1,
    name: "Conoce Click & Party",
    icon: ClickParty,
    color: "neutral",
    description: "Descubre como podemos ayudarte a organizar eventos inolvidables.",
  },
  {
    id: 1,
    name: "Sorteos cada media hora",
    icon: GiftCard,
    color: "primary",
    description: "Participa y gana increibles premios durante todo el evento.",
  },
  {
    id: 2,
    name: "Actividades para los peques",
    icon: Toys,
    color: "yellow",
    description: "Juegos, dinamicas y muchas sorpresas mas para tus peques.",
  },
  {
    id: 3,
    name: "Muestras gratis",
    icon: Cake,
    color: "blue",
    description: "Disfruta de muestras gratis de nuestros productos y servicios.",
  },
  {
    id: 4,
    name: "Exposición de emprendimientos",
    icon: Store,
    color: "orange",
    description: "Conoce a nuestros emprendedores y sus productos.",
  },
  {
    id: 6,
    name: "Tombola con premios",
    icon: Ticket,
    color: "pink",
    description: "Ademas al salir tambien participan en nuestra tombola con muchos premios.",
  },
  {
    id: 7,
    name: "Y mucho más",
    icon: Confetti,
    color: "secondary",
    description: "Descubre todas las actividades que tendremos para ti y para festejar a papá.",
  },
];
