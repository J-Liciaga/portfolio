import { GlobeIcon } from "@radix-ui/react-icons";

const styles = {
	container: "h-screen w-screen",
	container_wrapper: "h-full px-32 pt-20",
	inner_wrapper: `h-full | flex flex-col justify-center items-start | space-y-2`,
} as const;

export default function HeroSection() {
	return (
		<section id="hero" className={styles.container}>
			<div className={styles.container_wrapper}>
				<div className={styles.inner_wrapper}>
					<div className="flex justify-center items-center | space-x-4">
						<div className="text-[1.25rem] text-secondary font-extralight uppercase | tracking-widest">
							EST. 2014
						</div>
						<div className="text-secondary">|</div>
						<div className="text-secondary | flex justify-center items-center | space-x-2">
							<GlobeIcon />
							<div className="text-[1.25rem] text-secondary font-extralight uppercase | tracking-widest">
								MIAMI, FL - USA
							</div>
						</div>
					</div>
					<div className="flex justify-start items-start | space-x-4">
						<div className="text-[4rem] text-primary font-light | tracking-widest">
							2024
						</div>
						<div className="text-[4rem] text-secondary font-semibold uppercase | tracking-widest">
							Portfolio
						</div>
					</div>
					<div className="text-[4rem] text-secondary font-semibold uppercase | tracking-widest">
						Josiah Liciaga
					</div>
					<div className="text-[4rem] text-secondary font-semibold uppercase | tracking-widest">
						Software Engineer
					</div>
					<div className="flex | space-x-4 | text-[4rem] text-secondary font-semibold uppercase | tracking-widest">
						<div>Co-Founder of</div>
						<div className="text-primary font-light tracking-widest">
							AVA.AI
						</div>
					</div>
					<div className="flex justify-center items-center | space-x-4">
						<div className="text-secondary | flex justify-start items-center | space-x-2">
							<div className="w-4/6 text-[1.25rem] text-secondary font-extralight text-justify | tracking-widest">
								I am a full-stack engineer with 10 years of
								experience creating digital experiences. I am
								also the co-founder of AVA.AI, an AI research
								startup dedicated to AI anthropomorphism for
								education and optimizing learning through the
								latest AI technologies and science-based
								protocols.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
