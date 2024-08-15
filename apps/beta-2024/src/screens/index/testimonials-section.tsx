import { InfiniteMovingCards } from "@lucky-ui/animated/infinite-moving-cards";
import { testimonials } from "@2024/config/const/testimonials";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import SectionTitle from "@2024/components/atoms/section-title";
import { useTranslation } from "@2024/config/i18n/client";

type TestimonialsSectionProps = {
	lng: string;
};

const styles = {
	container: "space-y-8",
	section_title_wrapper: "px-12",
	section_box: "flex space-x-2",
	section_num_text: `${bebas_neue.className} text-red-800 font-bold text-[4rem] tracking-wide`,
	section_text: `${bebas_neue.className} font-bold text-[4rem] tracking-wide`,
} as const;

export default function TestimonialsSection({ lng }: TestimonialsSectionProps) {
	const { t } = useTranslation(lng, "common");

	return (
		<div className={styles.container}>
			<div className={styles.section_title_wrapper}>
				<SectionTitle num={5} title={t("testimonials.title")} />
			</div>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}
