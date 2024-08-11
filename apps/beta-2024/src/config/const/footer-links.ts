import { useTranslation } from "../i18n/client";

export const PORTFOLIO_LINKS = [
	{
		id: "about_me_link",
		href: (lng: string) => `/${lng}/about`,
	},
	{
		id: "services_link",
		href: (lng: string) => `/${lng}/services`,
	},
	{
		id: "projects_link",
		href: (lng: string) => `/${lng}/projects`,
	},
] as const;

export const SOCIALS_LINKS = [
	{
		id: "linked-in-link",
		label: "LinkedIn",
		href: "https://linkedin.com/in/josiah-liciaga-silva",
	},
	{
		id: "github-link",
		label: "Github",
		href: "https://github.com/J-Liciaga",
	},
	{
		id: "try-hack-me-link",
		label: "TryHackMe",
		href: "https://tryhackme.com/p/4D4STR4",
	},
	{
		id: "the-garden-link",
		label: "The Garden",
		href: "https://garden.jliciaga.dev/",
	},
] as const;

type PL = [
	{
		title: string;
		description: string;
		link: string;
	},
];

export function PORTFOLIO_LINK_FACTORY(lng: string) {
	const output: any[] | PL = [];
	const { t } = useTranslation(lng, "common");

	PORTFOLIO_LINKS.map(({ id, href }) => {
		output.push({
			id,
			label: t(`footer.portfolio_links.${id}`),
			href: href(lng),
		});
	});

	return output;
}
