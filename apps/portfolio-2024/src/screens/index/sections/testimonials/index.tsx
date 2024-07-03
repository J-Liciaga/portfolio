import { InfiniteMovingCards } from "@lucky-ui/animated/infinite-moving-cards";
import { testimonials } from "@2024/config/const/testimonials";
import { bebas_neue } from "@lucky-ui/assets/fonts";

const styles = {
	section_container: "",
	inner_wrapper: "px-32 py-10 space-y-8",
} as const;

export default function TestimonialsSection() {
	return (
		<div className={styles.section_container}>
			<div className={styles.inner_wrapper}>
				<div
					className={`${bebas_neue.className} text-primary font-bold text-[4rem] tracking-wide`}
				>
					Here&apos;s What Others Have To Say
				</div>
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
			</div>
		</div>
	);
}
