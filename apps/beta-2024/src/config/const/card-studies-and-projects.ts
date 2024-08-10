import { evlware_logo, ava_research_logo } from "@lucky-ui/assets/img";
import { useTranslation } from "@2024/config/i18n/client";

const PROJECTS = [
	{
		id: "evlware",
		cn: "col-span-1 lg:col-span-2 h-full glass dark:bg-neutral-800 min-h-[500px] lg:min-h-[300px]",
		link: (lng: string) => `https://jliciaga.dev/${lng}/projects/evlware`,
		logo: evlware_logo,
	},
	{
		id: "wave",
		cn: "col-span-1 glass dark:bg-neutral-800",
		link: (lng: string) =>
			`https://jliciaga.dev/${lng}/projects/wave-platforms`,
		logo: null,
	},
	{
		id: "garden",
		cn: "col-span-1 glass dark:bg-neutral-800",
		link: (lng: string) => `https://garden.jliciaga.dev/${lng}`,
		logo: null,
	},
	{
		id: "ava",
		cn: "col-span-1 lg:col-span-2 h-full glass dark:bg-neutral-800 min-h-[500px] lg:min-h-[300px]",
		link: (lng: string) => `https://ava-research.com/${lng}`,
		logo: ava_research_logo,
	},
] as const;

type P = [
	{
		title: string;
		description: string;
		cn: string;
		link: string;
		logo: any;
	},
];

export default function PROJECTS_FACTORY(lng: string) {
	const output: any[] | P = [];
	const { t } = useTranslation(lng, "projects");

	PROJECTS.map(({ id, cn, link, logo }) => {
		output.push({
			id,
			label: t(`${id}.label`),
			desc: t(`${id}.desc`),
			cn,
			link: link(lng),
			logo: logo,
		});
	});

	return output;
}
