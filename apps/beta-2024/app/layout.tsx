import "./global.css";

import {
	HeaderNavigation,
	FooterNavigation,
} from "@2024/components/navigation";

export const metadata = {
	title: "Welcome | JLS",
	description:
		"Josiah Liciaga Silva, Personal Portfolio, Full-Stack Software Engineering, Machine Learning, JavaScript, Python, Golang, Rust",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<HeaderNavigation />
				<main className="min-h-screen min-w-screen">{children}</main>
				<FooterNavigation />
			</body>
		</html>
	);
}
