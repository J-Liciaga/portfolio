import { redirect } from "next/navigation";
import { fallbackLng, languages } from "@2024/config/i18n/settings";
import { headers } from "next/headers";

export default function RootPage() {
	const headersList = headers();
	const acceptLanguage = headersList.get("accept-language");

	let lng = fallbackLng;

	if (acceptLanguage) {
		lng = acceptLanguage.split(",")[0].split("-")[0];

		if (!languages.includes(lng)) {
			lng = fallbackLng;
		}
	}

	redirect(`/${lng}`);
}
