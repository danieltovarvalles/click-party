import type { ImageMetadata } from "astro";
import logo9293Craft from "../assets/startups/9293Craft.svg";
import cover9293Craft from "../assets/startups/9293Craft_Photo.png";
import logoBaned from "../assets/startups/Baned_Logo.svg";
import coverBaned from "../assets/startups/Baned_Cover.png";
import logoFiestaPlus from "../assets/startups/FiestaPlus_Logo.jpeg";
import coverFiestaPlus from "../assets/startups/FiestaPlus_Photo.jpg";
import logoAltagracia from "../assets/startups/Altagracia_Logo.jpg";
import coverAltagracia from "../assets/startups/Altagracia_Cover.jpeg";
import logoMBBites from "../assets/startups/M-B-Bites-Logo.svg"
import coverMBBites from "../assets/startups/M-B-Bites_cover.jpeg"
import logoBaluna from "../assets/startups/Baluna_logo.jpeg"
import coverBaluna from "../assets/startups/Baluna_cover.jpeg"
import logoJassania from "../assets/startups/Jassania_logo.jpeg"
import coverJassania from "../assets/startups/Jassania_cover.jpeg"


export type ImageOrIcon = ImageMetadata | typeof logo9293Craft;

export type LogoPresentation = {
  containerClass?: string;
  imageClass?: string;
};

export type Startup = {
  id: number;
  name: string;
  description?: string;
  image?: ImageOrIcon;
  logo?: ImageOrIcon;
  logoPresentation?: LogoPresentation;
  phone?: string;
  facebook?: string;
  whatsappUrl?: string;
  mainPageUrl?: string;
  categoryIds?: number[];
};

export const startups: Startup[] = [
  {
    id: 1,
    name: "9293 Craft",
    description: "Corte y grabado laser, recuerdos, decoración.",
    image: cover9293Craft,
    logo: logo9293Craft,
    logoPresentation: {
      imageClass: "p-1",
    },
    phone: "528711068211",
    mainPageUrl: "https://www.instagram.com/9293craft/",
  },
  {
    id: 2,
    name: "BANED",
    description: "Hielitos,cupcakes y postres gourmet.",
    image: coverBaned,
    logo: logoBaned,
    logoPresentation: {
      imageClass: "p-1",
    },
    phone: "528714150303",
  },
  {
    id: 5,
    name: "M & B Bites",
    description: "Snack bar y decoraciones.",
    image: coverMBBites,
    logo: logoMBBites,
    logoPresentation: {
      imageClass: "p-2",
    },
    phone: "528715683714",
    mainPageUrl: "https://www.facebook.com/profile.php?id=61587287816267",
  },
  {
    id: 3,
    name: "Fiesta Plus",
    description: "Renta de sillas, mesas y brincolin.",
    image: coverFiestaPlus,
    logo: logoFiestaPlus,
    logoPresentation: {
      imageClass: "scale-[1.7] pt-[6px]",
    },
    facebook: "100065216013301",
    mainPageUrl: "https://www.facebook.com/share/1GkLakqAx2/?mibextid=wwXIfr",
  },
  {
    id: 4,
    name: "Altagracia Eventos",
    description: "Decoración, animación, snacks, mobiliario y mucho más.",
    image: coverAltagracia,
    logo: logoAltagracia,
    logoPresentation: {
      imageClass: "scale-110",
    },
    phone: "528721373025",
    mainPageUrl: "https://www.facebook.com/profile.php?id=61554953079082",
  },
  {
    id: 6,
    name: "Baluna",
    description: "Personalizados creativos para eventos, regalos y momentos especiales.",
    image: coverBaluna,
    logo: logoBaluna,
    phone: "528717962675",
    mainPageUrl: "https://www.instagram.com/baluna.creativecrafts?igsh=MWYxMDQ5bGVxdDVkaQ%3D%3D&utm_source=qr"
  },
  {
    id: 7,
    name: "Jassania",
    description: "Flores que alegran.",
    logo: logoJassania,
    image: coverJassania,
    // logoPresentation: {
    //   imageClass: "scale-110",
    // },
    // phone: "528721373025",
    // mainPageUrl: "https://www.facebook.com/profile.php?id=61554953079082",
  },
];
