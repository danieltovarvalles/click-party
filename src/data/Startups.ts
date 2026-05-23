import type { ImageMetadata } from "astro";
import logo9293Craft from "../assets/startups/9293Craft.svg";
import cover9293Craft from "../assets/startups/9293Craft_Photo.png";
import logoBaned from "../assets/startups/Baned_Logo.svg";
import coverBaned from "../assets/startups/Baned_Cover.png";
import logoFiestaPlus from "../assets/startups/FiestaPlus_Logo.jpeg";
import coverFiestaPlus from "../assets/startups/FiestaPlus_Photo.jpg";
import logoAltagracia from "../assets/startups/Altagracia_Logo.jpg";
import coverAltagracia from "../assets/startups/Altagracia_Cover.jpeg";

export type ImageOrIcon = ImageMetadata | typeof logo9293Craft;

export type LogoPresentation = {
  containerClass?: string;
  imageClass?: string;
};

export type Startup = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: ImageOrIcon;
  logo?: ImageOrIcon;
  logoPresentation?: LogoPresentation;
  phone?: string;
  facebook?: string;
  whatsappUrl?: string;
  mainPageUrl?: string;
  categoryIds: number[];
};

export const startups: Startup[] = [
  {
    id: 1,
    name: "9293 Craft",
    slug: "9293craft",
    description: "Corte y grabado laser, recuerdos, decoración.",
    image: cover9293Craft,
    logo: logo9293Craft,
    logoPresentation: {
      imageClass: "p-1",
    },
    phone: "528711068211",
    mainPageUrl: "https://www.instagram.com/9293craft/",
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    name: "BANED",
    slug: "banned",
    description: "Hielitos,cupcakes y postres gourmet.",
    image: coverBaned,
    logo: logoBaned,
    logoPresentation: {
      imageClass: "p-1",
    },
    phone: "528714150303",
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 3,
    name: "Fiesta Plus",
    slug: "fiesta-plus",
    description: "Renta de sillas, mesas y brincolin.",
    image: coverFiestaPlus,
    logo: logoFiestaPlus,
    logoPresentation: {
      imageClass: "scale-[1.7] pt-1",
    },
    facebook: "100065216013301",
    mainPageUrl: "https://www.facebook.com/share/1GkLakqAx2/?mibextid=wwXIfr",
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 4,
    name: "Altagracia Eventos",
    slug: "altagracia",
    description: "Renta de sillas, mesas y brincolin.",
    image: coverAltagracia,
    logo: logoAltagracia,
    logoPresentation: {
      imageClass: "scale-110",
    },
    phone: "528721373025",
    mainPageUrl: "https://www.facebook.com/profile.php?id=61554953079082",
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
];
