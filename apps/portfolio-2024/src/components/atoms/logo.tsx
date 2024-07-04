import { dark_logo, light_logo } from "@2024/assets/img";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ height = 75, width = 75 }) {
	return (
		<Link href="/">
			<div>
				<Image
					src={light_logo}
					height={200}
					width={200}
					alt="footer-logo"
				/>
			</div>
		</Link>
	);
}
