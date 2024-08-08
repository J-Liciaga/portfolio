enum Locales {
	en = "en",
	es = "es",
	de = "de",
	jp = "jp",
}

export const i18n = {
	defaultLocale: Locales.en,
	locales: [Locales.en, Locales.es, Locales.de, Locales.jp],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const LOCALE_COOKIE_NAME = "MY_LOCALE";
