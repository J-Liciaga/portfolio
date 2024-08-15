import SectionTitle from "@2024/components/atoms/section-title";
import { useTranslation } from "@2024/config/i18n/client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@lucky-ui/components/accordion";

type MyApproachSectionProps = {
	lng: string;
	num: number;
};

const styles = {} as const;

export default function MyApproachSection({
	lng,
	num,
}: MyApproachSectionProps) {
	const { t } = useTranslation(lng, "services");
	return (
		<div className="">
			<SectionTitle
				num={num}
				title={t("page.content.approach_section.title")}
			/>
			<div></div>
		</div>
	);
}
