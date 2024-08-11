import "./global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
	title: "Welcome! | JLS",
	description:
		"Josiah Liciaga Silva, Personal Portfolio, Full-Stack Software Engineering, Machine Learning, JavaScript, Python, Golang, Rust",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
