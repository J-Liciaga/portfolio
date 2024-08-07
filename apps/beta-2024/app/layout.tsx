import "./global.css";

import {
	HeaderNavigation,
	FooterNavigation,
} from "@2024/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Toaster from "@lucky-ui/components/toaster";

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
				<Analytics />
				<SpeedInsights />
				<Toaster />
			</body>
		</html>
	);
}
