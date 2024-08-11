import { redirect } from "next/navigation";
import { fallbackLng, languages } from "@2024/config/i18n/settings";

export default function CatchAllPage({
	params: { slug },
}: {
	params: { slug: string[] };
}) {
	const path = slug.join("/");

	const firstSlug = slug[0];

	if (languages.includes(firstSlug)) {
		return null;
	}

	redirect(`/${fallbackLng}/${path}`);
}
