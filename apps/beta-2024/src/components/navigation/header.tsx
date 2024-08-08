"use client";

import {
	// useLayoutEffect,
	useState,
} from "react";
import {
	BackpackIcon,
	EnvelopeClosedIcon,
	HamburgerMenuIcon,
	// MoonIcon,
	// SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "@lucky-ui/components/button";
import { useScrollDirection } from "@lucky-ui/hooks";
import { ContactForm } from "@2024/components/atoms/contact-form";
// import { useTheme } from "next-themes";
// import LanguagePicker from "@2024/components/atoms/language-picker";
import Logo from "@2024/components/atoms/logo";
import { Sidebar, SidebarBody, SidebarLink } from "@lucky-ui/animated/sidebar";
import {
	IconTopologyRing2,
	IconBook,
	IconBugOff,
	IconBrandTabler,
	IconPlant2,
	IconUserBolt,
	IconBrandGithub,
	IconMicroscope,
	IconPhoneCheck,
	IconDownload,
	IconAtom,
	IconMessage2Check,
	IconBrandLinkedin,
} from "@tabler/icons-react";
import Separator from "@lucky-ui/components/separator";
import Link from "next/link";

const links = [
	{
		label: "Home",
		href: "#",
		icon: (
			<IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "About Me",
		href: "#about-me-section",
		icon: (
			<IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Services",
		href: "#services-section",
		icon: (
			<IconTopologyRing2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Experience",
		href: "#experience-section",
		icon: (
			<IconAtom className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Case Studies & Projects",
		href: "#case-studies-section",
		icon: (
			<IconMicroscope className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

const PROJECT_LINKS = [
	{
		label: "Wave Platforms",
		href: "/projects/wave-platforms",
		icon: (
			<IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "AVA Research",
		href: "/projects/ava-research",
		icon: (
			<IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "EVLWARE",
		href: "/projects/evlware",
		icon: (
			<IconBugOff className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Digital Garden",
		href: "/digital-garden",
		icon: (
			<IconPlant2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

const CONTACT_LINKS = [
	{
		label: "Schedule Consultation",
		href: "#",
		icon: (
			<IconPhoneCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Download Resume",
		href: "#",
		icon: (
			<IconDownload className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Contact Me",
		href: "#",
		icon: (
			<IconMessage2Check className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

const SOCIAL_LINKS = [
	{
		label: "Github",
		href: "#",
		icon: (
			<IconBrandGithub className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Linkedin",
		href: "#",
		icon: (
			<IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

export default function HeaderNavigation() {
	// const { theme, setTheme } = useTheme();
	const scrollDirection = useScrollDirection();
	////
	// const [dark_theme, setDarkTheme] = useState<any>();
	const [open, setOpen] = useState(false);

	// useLayoutEffect(() => {
	// 	setDarkTheme(theme === "dark");
	// }, [theme]);

	// const handle_theme = () => {
	// 	if (theme === "dark") setTheme("light");
	// 	else setTheme("dark");
	// };

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
						{/* <div>
							<Button
								variant="outline"
								onClick={() => handle_theme()}
							>
								<div className="flex justify-center items-center | space-x-2">
									{dark_theme ? <MoonIcon /> : <SunIcon />}
								</div>
							</Button>
						</div> */}
						{/* <div>
							<LanguagePicker />
						</div> */}
						<div>
							<Button
								variant="outline"
								className="hidden md:block"
							>
								<Link
									href="/josiah-liciaga-resume-2024.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="flex justify-center items-center | space-x-2">
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
							{links.map((link, idx) => (
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
