"use client";

import { HoverEffect } from "@lucky-ui/animated/card-hover-effect";
import SectionTitle from "@2024/components/atoms/section-title";
import SERVICES_FACTORY from "@2024/config/const/services";
import { useTranslation } from "@2024/config/i18n/client";

type ServicesSectionProps = {
	lng: string;
};

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | px-12 space-y-8",
} as const;

export default function ServicesSection({ lng }: ServicesSectionProps) {
	const { t } = useTranslation(lng, "services");
	const SERVICES = SERVICES_FACTORY(lng);

	return (
		<section id="services-section" className={styles.container}>
			<div className={styles.content_wrapper}>
				<SectionTitle
					num={2}
					title={t("page.section_title")}
					desc={t("page.section_intro")}
				/>
				<div>
					<HoverEffect items={SERVICES} />
				</div>
			</div>
		</section>
	);
}
