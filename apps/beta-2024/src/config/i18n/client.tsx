/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import i18next from "i18next";
import { useEffect, useState } from "react";
import {
	initReactI18next,
	useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(
		resourcesToBackend(
			(language: string, namespace: string) =>
				import(`../../../public/locales/${language}/${namespace}.json`),
		),
	)
	.init({
		...getOptions(),
		lng: undefined,
		detection: {
			order: ["path", "htmlTag", "cookie", "navigator"],
		},
		preload: runsOnServerSide ? languages : [],
	});

export function useTranslation(
	lng: string,
	ns?: string | string[],
	options: {
		keyPrefix?: string;
	} = {},
) {
	const ret = useTranslationOrg(ns, options);
	const { i18n } = ret;

	if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
		i18n.changeLanguage(lng);
	} else {
		const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
		useEffect(() => {
			if (activeLng === i18n.resolvedLanguage) return;
			setActiveLng(i18n.resolvedLanguage);
		}, [activeLng, i18n.resolvedLanguage]);
		useEffect(() => {
			if (!lng || i18n.resolvedLanguage === lng) return;
			i18n.changeLanguage(lng);
		}, [lng, i18n]);
	}

	return ret;
}
