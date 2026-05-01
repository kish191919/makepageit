import type { ComponentType } from "react";
import type { Lang } from "@/lib/i18n";
import NobleCoffee from "./NobleCoffee";
import LumiereClinic from "./LumiereClinic";
import AtelierShop from "./AtelierShop";
import HaruAcademy from "./HaruAcademy";
import MoaPilates from "./MoaPilates";
import GreenLaw from "./GreenLaw";
import SeoulBakery from "./SeoulBakery";
import NovaStudio from "./NovaStudio";
import NexusLab from "./NexusLab";
import ArcoAtelier from "./ArcoAtelier";
import MoaiHotel from "./MoaiHotel";
import BloomCosmetics from "./BloomCosmetics";
import WoodAndStone from "./WoodAndStone";
import VinSecret from "./VinSecret";
import HaloFitness from "./HaloFitness";
import DrSlimClinic from "./DrSlimClinic";
import VillaToscana from "./VillaToscana";
import MuniHair from "./MuniHair";
import KittWorks from "./KittWorks";
import JiniIllustration from "./JiniIllustration";

export const templates: Record<string, ComponentType<{ lang: Lang }>> = {
  "noble-coffee": NobleCoffee,
  "lumiere-clinic": LumiereClinic,
  "atelier-shop": AtelierShop,
  "haru-academy": HaruAcademy,
  "moa-pilates": MoaPilates,
  "green-law": GreenLaw,
  "seoul-bakery": SeoulBakery,
  "nova-studio": NovaStudio,
  "nexus-lab": NexusLab,
  "arco-atelier": ArcoAtelier,
  "moai-hotel": MoaiHotel,
  "bloom-cosmetics": BloomCosmetics,
  "wood-and-stone": WoodAndStone,
  "vin-secret": VinSecret,
  "halo-fitness": HaloFitness,
  "dr-slim-clinic": DrSlimClinic,
  "villa-toscana": VillaToscana,
  "muni-hair": MuniHair,
  "kitt-works": KittWorks,
  "jini-illustration": JiniIllustration,
};
