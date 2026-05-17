import type { ImageMetadata } from "astro";
import logo9293Craft from "../assets/images/startups/9293Craft_Logo.png";
import image9293Craft from "../assets/images/startups/9293Craft_Photo.png";
import logoTattooParty from "../assets/images/Click_&_Party_Isotipo.png";
import imageTattooParty from "../assets/images/jungle.jpg";
import imageIceSweet from "../assets/images/startups/IcySweet_Photo.png";
import logoIceSweet from "../assets/images/startups/IcySweet_Logo.png"
import imageFiestaPlus from "../assets/images/startups/FiestaPlus_Photo.jpg";
import logoFiestaPlus from "../assets/images/startups/FiestaPlus_Logo.jpeg"

export type Startup = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: ImageMetadata;
  logo: ImageMetadata;
  phone?: string;
  facebook?: string;
  whatsappUrl?: string;
  mainPageUrl: string;
  categoryIds: number[];
};

export const startups: Startup[] = [
  {
    id: 1,
    name: "9293 Craft",
    slug: "9293-craft",
    description: "Corte y grabado laser, recuerdos, decoración.",
    image: image9293Craft,
    logo: logo9293Craft,
    phone:"528711068211",
    mainPageUrl: "https://www.instagram.com/9293craft/",
    categoryIds:[1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    name: "Ice & Sweet",
    slug: "ice-sweet",
    description: "Hielitos y cupcakes gourmet.",
    image: imageIceSweet,
    logo: logoIceSweet,
    phone: "528714150303",
    mainPageUrl: "https://www.google.com",
    categoryIds:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 3,
    name: "Fiesta Plus",
    slug: "fiesta-plus",
    description: "Renta de sillas, mesas y brincolin.",
    image: imageFiestaPlus,
    logo: logoFiestaPlus,
    facebook: "100065216013301",
    mainPageUrl: "www.facebook.com/share/1GkLakqAx2/?mibextid=wwXIfr",
    categoryIds:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 9,
    name: "Tattoo Party",
    slug: "tattoo-party",
    description: "Tattoos, piercings, maquillaje, peluquería, spa, etc.",
    image: imageTattooParty,
    logo: logoTattooParty,
    whatsappUrl: "https://wa.me/526561234567",
    mainPageUrl: "https://www.google.com",
    categoryIds:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
];