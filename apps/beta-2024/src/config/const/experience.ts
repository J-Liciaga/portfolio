import { useTranslation } from "../i18n/client";

const EXPERIENCE = [
	"arista-networks",
	"ava-research",
	"mido-lotto",
	"app-evolve",
	"cisco",
	"evertel",
	"florida-blue",
	"launch-peer",
	"elevate-entertainment",
];

type Exp = [
	{
		id: string;
		company: string;
		title: string;
		dates: string;
		duties: string[];
	},
];

export default function EXPERIENCE_FACTORY(lng: string) {
	const output: any[] | Exp = [];
	const { t } = useTranslation(lng, "experience");

	EXPERIENCE.map(exp => {
		output.push({
			id: exp,
			company: t(`${exp}.company`),
			title: t(`${exp}.title`),
			dates: t(`${exp}.dates`),
			duties: t(`${exp}.duties`, { returnObjects: true }),
		});
	});

	return output;
}
