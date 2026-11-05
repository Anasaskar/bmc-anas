import type { Locale } from "@/lib/i18n";
import ar from "../../assets/machines/ar";
import en from "./en";

const dictionaries = { ar, en };

export const getDictionary = (lang: Locale) => dictionaries[lang];
export type { Dictionary } from "../../assets/machines/ar";
