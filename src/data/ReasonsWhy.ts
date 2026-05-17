import BabyCar from "../assets/icons/BabyCar.astro";
import Ballon from "../assets/icons/Ballon.astro";
import Cake from "../assets/icons/Cake.astro";
import Calendar from "../assets/icons/Calendar.astro";
import CalendarSmile from "../assets/icons/CalendarSmile.astro";
import Camara from "../assets/icons/Camara.astro";
import Candy from "../assets/icons/Candy.astro";
import Cards from "../assets/icons/Cards.astro";
import Chair from "../assets/icons/Chair.astro";
import Confetti from "../assets/icons/Confetti.astro";
import Facebook from "../assets/icons/Facebook.astro";
import Gift from "../assets/icons/Gift.astro";
import Happy from "../assets/icons/Happy.astro";
import Instagram from "../assets/icons/Instagram.astro";
import MapPin from "../assets/icons/MapPin.astro";
import Music from "../assets/icons/Music.astro";
import Star from "../assets/icons/Star.astro";
import ThreeStars from "../assets/icons/ThreeStars.astro";
import Toys from "../assets/icons/Toys.astro";
import Whatsapp from "../assets/icons/Whatsapp.astro";
import Meat from "../assets/icons/Meat.astro";
import Users from "../assets/icons/Users.astro";
import UserScreen from "../assets/icons/UserScreen.astro";
import ToolsKitchen from "../assets/icons/ToolsKitchen.astro";
import ToolsKitchen2 from "../assets/icons/ToolsKitchen2.astro";
import GiftCard from "../assets/icons/GiftCard.astro";
import type { CategoryCardProps } from "../components/CategoryCard.astro";
import CheckList from "../assets/icons/CheckList.astro";
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
