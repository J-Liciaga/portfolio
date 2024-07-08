import "./global.css";
import HeaderNavigation from "@2024/components/navigation/header";
import FooterNavigation from "@2024/components/navigation/footer";
import ThemeProvider from "@lucky-ui/components/theme-provider";
import { Locale } from "@2024/config/i18n/i18n-config";
import I18nContextProvider from "@2024/config/context/i18n";
import { getDictionary } from "@2024/config/i18n/get-dictionary";

export const metadata = {
	title: "Welcome | JLS",
	description:
		"Josiah Liciaga Silva, Personal Portfolio, Full-Stack Software Engineering, Machine Learning, JavaScript, Python, Golang, Rust",
};

export default async function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: any;
}) {
	const dict = await getDictionary(lang);

	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<I18nContextProvider value={dict}>
						<HeaderNavigation />
						<main className="min-h-screen min-w-screen">
							{children}
						</main>
						<FooterNavigation />
					</I18nContextProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
