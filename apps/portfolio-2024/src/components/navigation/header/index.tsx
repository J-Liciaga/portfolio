"use client";

import { logo } from "@2024/assets/img";
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
import { Button } from "@lucky-ui/components/button";
import { useState } from "react";
import { useScrollDirection } from "@lucky-ui/hooks";

export default function HeaderNavigation() {
	const [dark_theme, setDarkTheme] = useState(true);
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const scrollDirection = useScrollDirection();

	const handle_theme = () => setDarkTheme(!dark_theme);

	return (
		<div className={`${menuIsOpen ? "overflow-hidden" : ""}`}>
			<header
				className={`
					fixed top-0 left-0 w-full py-5 text-center z-50 transition-all duration-300 
					ease-in-out backdrop-blur-xl
					${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
			  	`}
			>
				<nav className="flex justify-between items-center | pt-4 px-32">
					<div>
						<Link href={"/"}>
							<Image
								src={logo}
								height={75}
								width={75}
								alt="logo-jls-2024"
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
							<Button variant="outline">
								<HamburgerMenuIcon />
							</Button>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
