import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: any = {
	en: () => import("./dictionary/en.json").then(module => module.default),
	de: () => import("./dictionary/de.json").then(module => module.default),
	es: () => import("./dictionary/es.json").then(module => module.default),
	jp: () => import("./dictionary/jp.json").then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
	dictionaries[locale]?.() ?? dictionaries.en();
