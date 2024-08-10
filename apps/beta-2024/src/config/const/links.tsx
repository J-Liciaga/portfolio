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
import { useTranslation } from "../i18n/client";

const PORTFOLIO_LINKS = [
	{
		id: "home",
		href: "#",
		icon: (
			<IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "about",
		href: "#about-me-section",
		icon: (
			<IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "services",
		href: "#services-section",
		icon: (
			<IconTopologyRing2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "experience",
		href: "#experience-section",
		icon: (
			<IconAtom className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "projects",
		href: "#case-studies-section",
		icon: (
			<IconMicroscope className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

const PROJECT_LINKS = [
	{
		id: "wave",
		href: (lng: string) => `/${lng}/projects/wave-platforms`,
		icon: (
			<IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "ava",
		href: (lng: string) => `/${lng}/projects/ava-research`,
		icon: (
			<IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "evlware",
		href: (lng: string) => `/${lng}/projects/evlware`,
		icon: (
			<IconBugOff className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "garden",
		href: (lng: string) => `/${lng}/projects/digital-garden`,
		icon: (
			<IconPlant2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

const CONTACT_LINKS = [
	{
		id: "consultation",
		href: "https://calendly.com/josiah-liciaga",
		icon: (
			<IconPhoneCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "resume",
		href: "/josiah-liciaga-resume-2024.pdf",
		icon: (
			<IconDownload className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
	{
		id: "contact",
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
		label: "LinkedIn",
		href: "https://linkedin.com/in/josiah-liciaga-silva",
		icon: (
			<IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
		),
	},
];

export function PORTFOLIO_LINKS_FACTORY(lng: string) {
	const output: any[] | any = [];
	const { t } = useTranslation(lng, "common");

	PORTFOLIO_LINKS.map(({ id, href, icon }) => {
		output.push({
			id,
			label: t(`header.portfolio_links.${id}`),
			href,
			icon,
		});
	});

	return output;
}

export function PROJECT_LINKS_FACTORY(lng: string) {
	const output: any = [];
	const { t } = useTranslation(lng, "common");

	PROJECT_LINKS.map(({ id, href, icon }) => {
		output.push({
			id,
			label: t(`header.project_links.${id}`),
			href: href(lng),
			icon,
		});
	});

	return output;
}

export function CONTACT_LINKS_FACTORY(lng: string) {
	const output: any = [];
	const { t } = useTranslation(lng, "common");

	CONTACT_LINKS.map(({ id, href, icon }) => {
		output.push({
			id,
			label: t(`header.contact_links.${id}`),
			href,
			icon,
		});
	});

	return output;
}
