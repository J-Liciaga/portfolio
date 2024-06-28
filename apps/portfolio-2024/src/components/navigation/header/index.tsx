import { hackerfox } from "@2024/assets/img";
import Image from "next/image";
import Link from "next/link";
import { BackpackIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
// import { Switch } from "@luckyui/components/switch";
// import { Button } from "@luckyui/components/button";

export default function HeaderNavigation() {
	return (
		<header className="fixed top-0 | w-full">
			<nav className="flex justify-between items-center | py-12 px-32">
				<div>
					<Link href={"/"}>
						<div>LOGO</div>
						{/* <Image
							src={hackerfox}
							height={75}
							width={75}
							alt="hackerfox-jls-2024"
						/> */}
					</Link>
				</div>
				<div className="flex justify-center items-center space-x-4">
					{/* <div>Cases</div> */}
					<div>
						{/* <Switch/> */}
						<MoonIcon />
					</div>
					<div>ENG</div>
					<div className="flex justify-center items-center | space-x-2">
						<BackpackIcon />
						<div>CV</div>
					</div>
					{/* <div>MNU</div> */}
				</div>
			</nav>
		</header>
	);
}
