"use client";

import { footer_logo, hackerfox } from "@2024/assets/img";
import Image from "next/image";
import Link from "next/link";
import {
	BackpackIcon,
	EnvelopeClosedIcon,
	GlobeIcon,
	HamburgerMenuIcon,
	MoonIcon,
	SunIcon,
} from "@radix-ui/react-icons";
import Switch from "@lucky-ui/components/switch";
import { Button } from "@lucky-ui/components/button";
import { useState } from "react";

export default function HeaderNavigation() {
	const [dark_theme, setDarkTheme] = useState(true);

	const handle_theme = () => setDarkTheme(!dark_theme);

	return (
		<header className="fixed top-0 | w-full">
			<nav className="flex justify-between items-center | py-12 px-32">
				<div>
					<Link href={"/"}>
						<Image
							src={footer_logo}
							height={75}
							width={75}
							alt="hackerfox-jls-2024"
						/>
					</Link>
				</div>
				<div className="flex justify-center items-center space-x-4 | text-primary">
					<div>
						<Button
							variant="outline"
							onClick={() => handle_theme()}
						>
							<div className="flex justify-center items-center | space-x-2">
								{dark_theme ? <MoonIcon /> : <SunIcon />}
							</div>
						</Button>
					</div>
					<div>
						<Button variant="outline">
							<div className="flex justify-center items-center | space-x-2">
								<GlobeIcon />
								<div>ENG</div>
							</div>
						</Button>
					</div>
					<div>
						<Button
							variant="outline"
							className="flex justify-center items-center | space-x-2"
						>
							<BackpackIcon />
							<div>Resume</div>
						</Button>
					</div>
					<div>
						<Button
							variant="outline"
							className="flex justify-center items-center | space-x-2"
						>
							<EnvelopeClosedIcon />
							<div>Contact</div>
						</Button>
					</div>
					<div>
						<Button variant="default">
							<HamburgerMenuIcon />
						</Button>
					</div>
				</div>
			</nav>
		</header>
	);
}
