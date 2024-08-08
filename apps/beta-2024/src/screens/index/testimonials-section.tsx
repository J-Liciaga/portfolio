import { InfiniteMovingCards } from "@lucky-ui/animated/infinite-moving-cards";
import { testimonials } from "@2024/config/const/testimonials";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import SectionTitle from "@2024/components/atoms/section-title";

const styles = {
	container: "px-12 space-y-8",
	section_box: "flex space-x-2",
	section_num_text: `${bebas_neue.className} text-red-800 font-bold text-[4rem] tracking-wide`,
	section_text: `${bebas_neue.className} font-bold text-[4rem] tracking-wide`,
} as const;

export default function TestimonialsSection() {
	return (
		<div className={styles.container}>
			<SectionTitle num={5} title={"Here's What Others Have To Say"} />
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}
