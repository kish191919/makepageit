import type { ComponentType } from "react";
import type { Lang } from "@/lib/i18n";
import NobleCoffee from "./NobleCoffee";
import LumiereClinic from "./LumiereClinic";
import AtelierShop from "./AtelierShop";
import MoaPilates from "./MoaPilates";
import GreenLaw from "./GreenLaw";
import SeoulBakery from "./SeoulBakery";
import NovaStudio from "./NovaStudio";
import NexusLab from "./NexusLab";
import ArcoAtelier from "./ArcoAtelier";
import MoaiHotel from "./MoaiHotel";
import WoodAndStone from "./WoodAndStone";
import VinSecret from "./VinSecret";
import VillaToscana from "./VillaToscana";
import JiniIllustration from "./JiniIllustration";
import HarborRealty from "./HarborRealty";
import MeridianWealth from "./MeridianWealth";
import SolsticeInteriors from "./SolsticeInteriors";
import WillowbrookDental from "./WillowbrookDental";

export const templates: Record<string, ComponentType<{ lang: Lang }>> = {
  "noble-coffee": NobleCoffee,
  "lumiere-clinic": LumiereClinic,
  "atelier-shop": AtelierShop,
  "moa-pilates": MoaPilates,
  "green-law": GreenLaw,
  "seoul-bakery": SeoulBakery,
  "nova-studio": NovaStudio,
  "nexus-lab": NexusLab,
  "arco-atelier": ArcoAtelier,
  "moai-hotel": MoaiHotel,
  "wood-and-stone": WoodAndStone,
  "vin-secret": VinSecret,
  "villa-toscana": VillaToscana,
  "jini-illustration": JiniIllustration,
  "harbor-realty": HarborRealty,
  "meridian-wealth": MeridianWealth,
  "solstice-interiors": SolsticeInteriors,
  "willowbrook-dental": WillowbrookDental,
};
