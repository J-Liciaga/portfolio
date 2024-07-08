import { dark_logo, light_logo } from "@lucky-ui/assets/img";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ height = 75, width = 75 }) {
	return (
		<Link href="/">
			<div>
				<Image
					src={dark_logo}
					height={height}
					width={width}
					alt="footer-logo"
				/>
			</div>
		</Link>
	);
}
