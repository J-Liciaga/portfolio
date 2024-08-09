import "./global.css";

export const metadata = {
	title: "Digital Garden | Josiah Liciaga",
	description:
		"Josiah Liciaga-Silva, Digital Garden, Unorganized notes, books, code experiments",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
