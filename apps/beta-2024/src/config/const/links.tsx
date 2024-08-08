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

export const PORTFOLIO_LINKS = [
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

export const PROJECT_LINKS = [
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

export const CONTACT_LINKS = [
	{
		label: "Schedule Consultation",
		href: "https://calendly.com/josiah-liciaga",
		icon: (
			<IconPhoneCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Download Resume",
		href: "/josiah-liciaga-resume-2024.pdf",
		icon: (
			<IconDownload className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Contact Me",
		href: "/contact-me",
		icon: (
			<IconMessage2Check className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

export const SOCIAL_LINKS = [
	{
		label: "Github",
		href: "https://github.com/J-Liciaga",
		icon: (
			<IconBrandGithub className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		label: "Linkedin",
		href: "https://linkedin.com/in/josiah-liciaga-silva",
		icon: (
			<IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];
