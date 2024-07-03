"use client";

import { footer_logo } from "@2024/assets/img";
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
import { useEffect, useState } from "react";
import "./header.module.css";

export default function HeaderNavigation() {
	const [dark_theme, setDarkTheme] = useState(true);

	const handle_theme = () => setDarkTheme(!dark_theme);

	const [scrollDirection, setScrollDirection] = useState("");
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		let lastScroll = 0;

		const handleScroll = () => {
			const currentScroll = window.pageYOffset;

			if (currentScroll <= 0) {
				setScrollDirection("");
				return;
			}

			if (currentScroll > lastScroll && scrollDirection !== "down") {
				setScrollDirection("down");
			} else if (
				currentScroll < lastScroll &&
				scrollDirection === "down"
			) {
				setScrollDirection("up");
			}

			lastScroll = currentScroll;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollDirection]);

	return (
		<div className={`${menuIsOpen ? "overflow-hidden" : ""}`}>
			<header
				className={`
				fixed top-0 left-0 w-full py-5 text-center z-50 transition-all duration-300 ease-in-out
				${scrollDirection === "down" ? "-translate-y-full" : ""}
				${scrollDirection === "up" ? "shadow-lg" : ""}
				${menuIsOpen ? "shadow-none" : ""}
			`}
			>
				<nav className="flex justify-between items-center | pt-4 px-32">
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
		</div>
		// <header className="fixed top-0 | w-full">
		// 	<nav className="flex justify-between items-center | pt-12 px-32">
		// 		<div>
		// 			<Link href={"/"}>
		// 				<Image
		// 					src={footer_logo}
		// 					height={75}
		// 					width={75}
		// 					alt="hackerfox-jls-2024"
		// 				/>
		// 			</Link>
		// 		</div>
		// 		<div className="flex justify-center items-center space-x-4 | text-primary">
		// 			<div>
		// 				<Button
		// 					variant="outline"
		// 					onClick={() => handle_theme()}
		// 				>
		// 					<div className="flex justify-center items-center | space-x-2">
		// 						{dark_theme ? <MoonIcon /> : <SunIcon />}
		// 					</div>
		// 				</Button>
		// 			</div>
		// 			<div>
		// 				<Button variant="outline">
		// 					<div className="flex justify-center items-center | space-x-2">
		// 						<GlobeIcon />
		// 						<div>ENG</div>
		// 					</div>
		// 				</Button>
		// 			</div>
		// 			<div>
		// 				<Button
		// 					variant="outline"
		// 					className="flex justify-center items-center | space-x-2"
		// 				>
		// 					<BackpackIcon />
		// 					<div>Resume</div>
		// 				</Button>
		// 			</div>
		// 			<div>
		// 				<Button
		// 					variant="outline"
		// 					className="flex justify-center items-center | space-x-2"
		// 				>
		// 					<EnvelopeClosedIcon />
		// 					<div>Contact</div>
		// 				</Button>
		// 			</div>
		// 			<div>
		// 				<Button variant="default">
		// 					<HamburgerMenuIcon />
		// 				</Button>
		// 			</div>
		// 		</div>
		// 	</nav>
		// </header>
	);
}
