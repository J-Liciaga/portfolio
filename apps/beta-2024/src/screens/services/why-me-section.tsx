import SectionTitle from "@2024/components/atoms/section-title";
import { useTranslation } from "@2024/config/i18n/client";

type WhyMeSectionProps = {
	lng: string;
	num: number;
};

export default function WhyMeSection({ lng, num }: WhyMeSectionProps) {
	const { t } = useTranslation(lng, "services");

	return (
		<div>
			<SectionTitle
				num={num}
				title={t("page.content.why_me_section.title")}
			/>
			<div></div>
		</div>
	);
}
