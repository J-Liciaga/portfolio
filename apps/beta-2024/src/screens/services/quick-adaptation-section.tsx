import SectionTitle from "@2024/components/atoms/section-title";
import { useTranslation } from "@2024/config/i18n/client";

type QuickAdaptationSectionProps = {
	lng: string;
	num: number;
};

export default function QuickAdaptationSection({
	lng,
	num,
}: QuickAdaptationSectionProps) {
	const { t } = useTranslation(lng, "services");

	return (
		<div>
			<SectionTitle
				num={num}
				title={t("page.content.adaptation_section.title")}
			/>
			<div></div>
		</div>
	);
}
