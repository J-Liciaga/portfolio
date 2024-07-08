"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { light_logo, dark_logo } from "@lucky-ui/assets/img";
import {
	BackpackIcon,
	EnvelopeClosedIcon,
	GlobeIcon,
	HamburgerMenuIcon,
	MoonIcon,
	SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "@lucky-ui/components/button";
import { useScrollDirection } from "@lucky-ui/hooks";
import { ContactForm } from "@2024/components/atoms/contact-form";
import { useTheme } from "next-themes";
import LanguagePicker from "@2024/components/atoms/language-picker";

export default function HeaderNavigation() {
	const { theme, setTheme } = useTheme();
	const scrollDirection = useScrollDirection();
	////
	const [dark_theme, setDarkTheme] = useState<any>();
	const [menu_is_open, setMenuIsOpen] = useState(false);

	useLayoutEffect(() => {
		setDarkTheme(theme === "dark");
	}, [theme]);

	const handle_theme = () => {
		if (theme === "dark") setTheme("light");
		else setTheme("dark");
	};

	const handle_menu = () => {
		setMenuIsOpen(!menu_is_open);
	};

	return (
		<div className={`${menu_is_open ? "overflow-hidden" : ""}`}>
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
								src={dark_theme ? light_logo : dark_logo}
								height={75}
								width={75}
								alt="portfolio-logo"
							/>
						</Link>
					</div>
					<div className="flex justify-center items-center space-x-4 ">
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
							<LanguagePicker />
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
							<ContactForm
								variant="outline"
								icon={EnvelopeClosedIcon}
								rtl={false}
							/>
						</div>
						<div>
							<Button
								variant="outline"
								onClick={() => {
									handle_menu();
								}}
							>
								<HamburgerMenuIcon />
							</Button>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
