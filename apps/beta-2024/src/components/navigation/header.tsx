"use client";

import { useState } from "react";
import Link from "next/link";
import {
	BackpackIcon,
	EnvelopeClosedIcon,
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button } from "@lucky-ui/components/button";
import { useScrollDirection } from "@lucky-ui/hooks";
import { ContactForm } from "@2024/components/atoms/contact-form";
import Logo from "@2024/components/atoms/logo";
import { Sidebar, SidebarBody, SidebarLink } from "@lucky-ui/animated/sidebar";
import Separator from "@lucky-ui/components/separator";
import {
	CONTACT_LINKS,
	PORTFOLIO_LINKS,
	PROJECT_LINKS,
	SOCIAL_LINKS,
} from "@2024/config/const/links";

export default function HeaderNavigation() {
	const scrollDirection = useScrollDirection();
	const [open, setOpen] = useState(false);

	const handle_menu = () => {
		setOpen(!open);
	};

	return (
		<div className={`${open ? "overflow-hidden" : ""}`}>
			<header
				className={`
					fixed top-0 left-0 w-full py-5 text-center z-50 transition-all duration-300 
					ease-in-out backdrop-blur-xl
					${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
			  	`}
			>
				<nav className="flex justify-between items-center | pt-4 px-12">
					<div>
						<Logo />
					</div>
					<div className="flex justify-center items-center space-x-4 ">
						<div>
							<Button
								variant="outline"
								className="hidden md:flex"
							>
								<Link
									href="/josiah-liciaga-resume-2024.pdf"
									target="_blank"
									rel="noopener noreferrer"
									passHref
								>
									<div className="flex justify-center items-center | space-x-2 h-10">
										<BackpackIcon />
										<div>Resume</div>
									</div>
								</Link>
							</Button>
						</div>
						<div>
							<ContactForm
								variant="outline"
								icon={EnvelopeClosedIcon}
								rtl={false}
								className="hidden md:block"
							/>
						</div>
						<div>
							<Button
								variant="outline"
								onClick={() => {
									handle_menu();
								}}
								aria-label="menu-button"
							>
								<HamburgerMenuIcon />
							</Button>
						</div>
					</div>
				</nav>
			</header>
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
						<div className="mt-8 flex flex-col gap-2">
							{PORTFOLIO_LINKS.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
						<Separator className="my-4" />
						<div className="flex flex-col gap-2">
							{PROJECT_LINKS.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
						<Separator className="my-4" />
						<div className="flex flex-col gap-2">
							{CONTACT_LINKS.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
						<Separator className="my-4" />
						<div className="flex flex-col gap-2">
							{SOCIAL_LINKS.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
				</SidebarBody>
			</Sidebar>
		</div>
	);
}
