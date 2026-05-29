import type { ImageMetadata } from "astro";
import logo9293Craft from "../assets/startups/9293Craft.svg";
import cover9293Craft from "../assets/startups/9293Craft_Photo.png";
import logoBaned from "../assets/startups/Baned_Logo.svg";
import coverBaned from "../assets/startups/Baned_Cover.png";
import logoFiestaPlus from "../assets/startups/FiestaPlus_Logo.jpeg";
import coverFiestaPlus from "../assets/startups/FiestaPlus_Photo.jpg";
import logoAltagracia from "../assets/startups/Altagracia_Logo.jpg";
import coverAltagracia from "../assets/startups/Altagracia_Cover.jpeg";
import logoMBBites from "../assets/startups/M-B-Bites-Logo.svg";
import coverMBBites from "../assets/startups/M-B-Bites_cover.jpeg";
import logoBaluna from "../assets/startups/Baluna_logo.jpeg";
import coverBaluna from "../assets/startups/Baluna_cover.jpeg";
import logoJassania from "../assets/startups/Jassania_logo.jpeg";
import coverJassania from "../assets/startups/Jassania_cover.jpeg";
import logoAndany from "../assets/startups/Andany_logo.jpeg";
import coverAndany from "../assets/startups/Andany_cover.jpeg";
import logoDecco from "../assets/startups/DeccoDaisyAtelier_logo.jpeg";
import coverDecco from "../assets/startups/DeccoDaisyAtelier_cover.jpeg";
import logoBochornitoPizzas from "../assets/startups/Bochornito_logo.jpeg";
import coverBochornitoPizzas from "../assets/startups/Bochornito_cover.jpeg";
import logoLittleDivasSpa from "../assets/startups/LittleDivasSpa_logo.jpeg";
import coverLittleDivasSpa from "../assets/startups/LittleDivasSpa_cover.jpeg";

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

const messageText = (startupName: string) => {
  return encodeURIComponent(
    `¡Hola! Vi su perfil de ${startupName} en Click & Party y quisiera conocer más detalles sobre sus servicios.`,
  );
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
    whatsappUrl: `https://wa.me/528711068211?text=${messageText("9293 Craft")}`,
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
    whatsappUrl: `https://wa.me/528714150303?text=${messageText("BANED")}`,
  },
  {
    id: 5,
    name: "M&B Bites",
    description: "Snack bar y decoraciones.",
    image: coverMBBites,
    logo: logoMBBites,
    logoPresentation: {
      imageClass: "p-2",
    },
    phone: "528715683714",
    whatsappUrl: `https://wa.me/528715683714?text=${messageText("M&B Bites")}`,
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
    whatsappUrl: `https://wa.me/528721373025?text=${messageText("Altagracia Eventos")}`,
    mainPageUrl: "https://www.facebook.com/profile.php?id=61554953079082",
  },
  {
    id: 6,
    name: "Baluna",
    description:
      "Personalizados creativos para eventos, regalos y momentos especiales.",
    image: coverBaluna,
    logo: logoBaluna,
    phone: "528717962675",
    whatsappUrl: `https://wa.me/528717962675?text=${messageText("Baluna")}`,
    mainPageUrl:
      "https://www.instagram.com/baluna.creativecrafts?igsh=MWYxMDQ5bGVxdDVkaQ%3D%3D&utm_source=qr",
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
  {
    id: 8,
    name: "Andany",
    description: "DJ, iluminación, snacks y mucho más.",
    logo: logoAndany,
    image: coverAndany,
    phone: "528719192667",
    whatsappUrl: "https://wa.me/message/VKWN5TH7ESJ4O1",
    mainPageUrl: "https://www.facebook.com/profile.php?id=61551617953737",
  },
  {
    id: 9,
    name: "Decco Daisy Atelier",
    description: "Velas artesanales personalizadas.",
    logo: logoDecco,
    image: coverDecco,
    facebook: "61584641774675",
    mainPageUrl: "https://deccodaisyatelier.my.canva.site/",
  },
  {
    id: 10,
    name: "Bochornito Pizzas",
    description: "Variedad de pizzas caseras, echas al momento",
    logo: logoBochornitoPizzas,
    image: coverBochornitoPizzas,
    phone: "528711766608",
    whatsappUrl: `https://wa.me/528711766608?text=${messageText("Bochornito Pizzas")}`,
    mainPageUrl: "https://www.facebook.com/profile.php?id=61563877405158",
  },
  {
    id: 11,
    name: "Little Divas Spa",
    description: "Servicio de spa para niñas.",
    logo: logoLittleDivasSpa,
    image: coverLittleDivasSpa,
    phone: "528712396088",
    whatsappUrl: `https://wa.me/528712396088?text=${messageText("Little Divas Spa")}`,
    mainPageUrl: "https://www.facebook.com/profile.php?id=61580984664198",
  },
];
