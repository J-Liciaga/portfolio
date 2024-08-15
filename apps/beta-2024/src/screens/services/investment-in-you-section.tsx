import SectionTitle from "@2024/components/atoms/section-title";
import { useTranslation } from "@2024/config/i18n/client";

type InvestmentInSuccessSectionProps = {
	lng: string;
	num: number;
};

export default function InvestmentInSuccessSection({
	lng,
	num,
}: InvestmentInSuccessSectionProps) {
	const { t } = useTranslation(lng, "services");

	return (
		<div>
			<SectionTitle
				num={num}
				title={t("page.content.investment_section.title")}
			/>
			<div></div>
		</div>
	);
}
