import "./global.css";
import HeaderNavigation from "@2024/components/navigation/header";
import FooterNavigation from "@2024/components/navigation/footer";
import ThemeProvider from "@lucky-ui/components/theme-provider";

export const metadata = {
	title: "Welcome | JLS",
	description:
		"Josiah Liciaga Silva, Personal Portfolio, Full-Stack Software Engineering, Machine Learning, JavaScript, Python, Golang, Rust",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<HeaderNavigation />
					<main className="min-h-screen min-w-screen">
						{children}
					</main>
					<FooterNavigation />
				</ThemeProvider>
			</body>
		</html>
	);
}
