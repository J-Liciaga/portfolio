import { GlobeIcon } from "@radix-ui/react-icons";

const styles = {
	container: "h-screen w-screen",
	content_wrapper: "",
} as const;

export default function HeroSection() {
	return (
		<section id="hero" className={styles.container}>
			<div className="h-full px-32">
				<div className="h-full | flex flex-col justify-center items-start | space-y-2">
					<div className="flex justify-center items-center | space-x-4">
						<div className="text-[1.25rem] text-secondary font-extralight uppercase | tracking-widest">
							EST. 2014
						</div>
						<div className="text-secondary">|</div>
						<div className="text-secondary | flex justify-center items-center | space-x-2">
							<GlobeIcon />
							<div className="text-[1.25rem] text-secondary font-extralight uppercase | tracking-widest">
								HNL, HI - USA
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
						<div className="text-primary">AVA.AI</div>
					</div>
					<div className="flex justify-center items-center | space-x-4">
						<div className="text-secondary | flex justify-center items-center | space-x-2">
							<div className="text-[1.25rem] text-secondary font-extralight | tracking-widest">
								I am a full-stack engineer with 10y of
								experience creating digital experiences. I am
								also the co-founder of AVA.AI, an AI research
								startup focusing on AI anthromorphism for
								education and the optimization of learning using
								science based protocols.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
