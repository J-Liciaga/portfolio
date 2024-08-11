import { ReactNode } from "react";
import {
	HeaderNavigation,
	FooterNavigation,
} from "@2024/components/navigation";
import { languages } from "@2024/config/i18n/settings";
import Toaster from "@lucky-ui/components/toaster";

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }));
}

export default function LanguageLayout({
	children,
	params: { lang },
}: {
	children: ReactNode;
	params: { lang: string };
}) {
	return (
		<>
			<HeaderNavigation lng={lang} />
			<main className="min-h-screen min-w-screen">{children}</main>
			<FooterNavigation lng={lang} />
			<Toaster />
		</>
	);
}
