import { useTranslation } from "@2024/config/i18n/client";

const SERVICES = [
	{
		id: "front-end",
		link: (lng: string) => `https://jliciaga.dev/${lng}/services/front-end`,
	},
	{
		id: "back-end",
		link: (lng: string) => `https://jliciaga.dev/${lng}/services/back-end`,
	},
	{
		id: "ml-ai",
		link: (lng: string) => `https://jliciaga.dev/${lng}/services/ml-ai`,
	},
	{
		id: "cloud",
		link: (lng: string) => `https://jliciaga.dev/${lng}/services/cloud`,
	},
];

type SERVICES = [
	{
		title: string;
		description: string;
		link: string;
	},
];

export default function SERVICES_FACTORY(lng: string) {
	const output: any[] | SERVICES = [];
	const { t } = useTranslation(lng, "services");

	SERVICES.map(({ id, link }) => {
		output.push({
			id,
			title: t(`${id}.title`),
			description: t(`${id}.desc`),
			link: link(lng),
		});
	});

	return output;
}
