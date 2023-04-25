import { KeyValueSet } from "strapi-typed";
import en from "./en.json";
import fr from "./fr.json";
import tr from "./tr.json";
import ptBr from "./pt-BR.json";
import ru from "./ru.json";

export type TranslationKey = "en" | "fr" | "pt-BR" | "tr" | "ru";
export type Translations = {
  [key in TranslationKey]: KeyValueSet<string>
};

const trads: Translations = {
  en,
  fr,
  "pt-BR": ptBr,
  tr,
  ru,  
};

export default trads;
