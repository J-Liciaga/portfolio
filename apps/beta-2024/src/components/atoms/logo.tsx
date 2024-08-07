import { dark_logo, light_logo } from "@lucky-ui/assets/img";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Logo({ height = 75, width = 75 }) {
	const { theme } = useTheme();

	return (
		<Link href="/">
			<Image
				src={theme === "dark" ? light_logo : dark_logo}
				height={height}
				width={width}
				alt="footer-logo"
			/>
		</Link>
	);
}
