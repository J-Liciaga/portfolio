import Image from "next/image";
import { founder } from "@2024/assets/img";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import SectionTitle from "@2024/components/atoms/section-title";

const styles = {
	container: "h-full w-screen",
	container_wrapper:
		"h-full w-full | flex flex-col justify-center items-center | space-y-8 px-12",
	content_layout: "| md:grid md:grid-cols-7 md:gap-4 | md:space-x-8",
	content_inner_wrapper:
		"w-full col-span-4 | flex flex-col justify-center items-start | space-y-4",
	heading: `${bebas_neue.className} text-primary text-center md:text-left font-bold text-[2rem] tracking-wide`,
	heading_desc:
		"md:w-fit text-secondary text-justify text-[1.25rem] | space-y-4 md:pr-10",
} as const;

export default function AboutMeSection() {
	return (
		<section id="about-me-section" className={styles.container}>
			<div className={styles.container_wrapper}>
				<SectionTitle
					num={1}
					title={"About Me"}
					desc={`I am a full-stack engineer with 10 years of experience
						creating digital experiences. I am also the co-founder
						of AVA.AI, an AI research startup dedicated to AI
						anthropomorphism for education, as well as, the
						optimization of learning through the latest AI
						technologies and science-based protocols.`}
				/>
				<div className={styles.content_layout}>
					<div className={styles.content_inner_wrapper}>
						<div className={styles.heading}>
							I pioneer seamless integrations to address intricate
							software challenges
						</div>
						<div className={styles.heading_desc}>
							<p>
								I&apos;m a visionary software engineering
								leader, pushing the boundaries of AI and machine
								learning. My passion is transforming complex
								challenges into elegant, efficient solutions
								that set new industry standards. I&apos;m
								committed to developing secure, performant, and
								scalable software. I believe in harnessing
								cutting-edge technologies to enhance digital
								experiences, ensuring swift implementations with
								minimal disruption. From tech giants to
								startups, I've led the creation of AI-driven
								systems and robust platforms. My expertise spans
								the full tech stack, bridging frontend
								experiences and backend infrastructure. As a
								leader, I foster environments that nurture
								creativity and excellence. I guide teams to
								break barriers, optimize processes, and achieve
								extraordinary results. My leadership is rooted
								in empowerment and collaboration. I believe
								technology, wielded with vision, can solve our
								most complex problems. With every project,
								I&apos;m working towards a future where software
								anticipates tomorrow&apos;s challenges. Ready to
								shape the future of technology together?
								Let&apos;s connect and turn bold ideas into
								reality.
							</p>
						</div>
						<div className="text-secondary text-justify">
							<Button
								variant="outline"
								className="bg-neutral-800 text-white"
							>
								<div className="flex justify-center items-center | space-x-2">
									<div>Learn More About Me</div>
									<ArrowTopRightIcon />
								</div>
							</Button>
						</div>
					</div>
					<div className="hidden md:col-span-3 | md:flex md:justify-center md:items-center">
						<Image
							src={founder}
							alt="about-section-img"
							className="rounded-md scale-115"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
