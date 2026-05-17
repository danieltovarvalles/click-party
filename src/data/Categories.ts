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
import Hearth from "../assets/icons/Hearth.astro";
import Presentation from "../assets/icons/Presentation.astro";
import HandShake from "../assets/icons/HandShake.astro";
export type CategoryColor =
  | "red"
  | "yellow"
  | "blue"
  | "orange"
  | "green"
  | "purple"
  | "pink"
  | "cyan";

export const categories:CategoryCardProps['category'][] = [
  {
    id: 1,
    name: "Decoración y Ambientación",
    icon: Ballon,
    color: "red",
    url: "/categorias/decoracion-y-ambientacion",
  },
  {
    id: 2,
    name: "Alimentos y Bebidas",
    icon: Cake,
    color: "yellow",
    url: "/categorias/alimentos-y-bebidas",
  },
  {
    id: 3,
    name: "Música y Audio",
    icon: Music,
    color: "blue",
    url: "/categorias/musica-y-audio",
  },
  {
    id: 4,
    name: "Fotografía y Video",
    icon: Camara,
    color: "orange",
    url: "/categorias/fotografia-y-video",
  },
  {
    id: 5,
    name: "Personalizados y Recuerdos",
    icon: GiftCard,
    color: "green",
    url: "/categorias/personalizados-y-recuerdos",
  },
  {
    id: 6,
    name: "Animación y Entretenimiento",
    icon: UserScreen,
    color: "purple",
    url: "/categorias/animacion-y-entretenimiento",
  },
  {
    id: 7,
    name: "Mobiliario y Renta",
    icon: Chair,
    color: "pink",
    url: "/categorias/mobiliario-y-renta",
  },
  {
    id: 8,
    name: "Organización y Paquetes",
    icon: CheckList,
    color: "cyan",
    url: "/categorias/organizacion-y-paquetes",
  },
];

export const iconTest = [
  UserSearch,
  Hearth,
  Presentation,
  HandShake,
  BabyCar,
  Ballon,
  Cake,
  Calendar,
  CalendarSmile,
  Camara,
  Candy,
  Cards,
  Chair,
  Confetti,
  Facebook,
  Gift,
  GiftCard,
  Happy,
  Instagram,
  MapPin,
  Meat,
  Music,
  Star,
  ThreeStars,
  Toys,
  ToolsKitchen,
  ToolsKitchen2,
  Users,
  UserScreen,
  Whatsapp,
];
