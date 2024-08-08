// import { Locale } from "@2024/config/i18n/i18n-config";
import I18nContextProvider from "@2024/config/context/i18n";
import { getDictionary } from "@2024/config/i18n/get-dictionary";

export const metadata = {
	title: "Welcome | JLS",
	description:
		"Josiah Liciaga Silva, Personal Portfolio, Full-Stack Software Engineering, Machine Learning, JavaScript, Python, Golang, Rust",
};

export default async function I18nLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: any;
}) {
	const dict = await getDictionary(lang);

	return <I18nContextProvider value={dict}>{children}</I18nContextProvider>;
}
