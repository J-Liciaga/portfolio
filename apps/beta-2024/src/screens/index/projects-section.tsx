"use client";

import Image from "next/image";
import { WobbleCard } from "@lucky-ui/animated/wobble-card";
import { CASE_STUDIES_AND_PROJECTS } from "@2024/config/const/card-studies-and-projects";
import SectionTitle from "@2024/components/atoms/section-title";
import { Button } from "@lucky-ui/components/button";
import { IconExternalLink } from "@tabler/icons-react";

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | px-12 space-y-8",
	card_box: "w-full | grid grid-cols-1 lg:grid-cols-3 gap-4",
	card_content_wrapper: "max-w-xs",
	card_label:
		"text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-zinc-200",
	card_desc: "mt-4 text-left  text-base/6 text-zinc-200",
	logo_img:
		"hidden md:block absolute -right-4 lg:-right-[25%] grayscale filter -bottom-10 object-contain rounded-2xl",
} as const;

export default function ProjectsSection() {
	const render_cards = () => {
		return CASE_STUDIES_AND_PROJECTS.map(
			({ id, label, desc, cn, logo }) => (
				<WobbleCard key={id} containerClassName={cn}>
					<div className={styles.card_content_wrapper}>
						<h2 className={styles.card_label}>{label}</h2>
						<p className={styles.card_desc}>{desc}</p>
					</div>
					{logo && (
						<Image
							src={logo}
							width={500}
							height={500}
							alt="linear demo image"
							className={styles.logo_img}
						/>
					)}
					<div className="absolute bottom-4 flex justify-start items-center pt-6 space-x-6">
						<div className="bg-transparent text-white border-white">
							Status: Ongoing
						</div>
						<Button
							variant="outline"
							className="bg-transparent text-white border-white"
						>
							<div className="flex justify-center items-center | space-x-2">
								<div>VISIT</div>
								<IconExternalLink />
							</div>
						</Button>
					</div>
				</WobbleCard>
			),
		);
	};

	return (
		<section id="case-studies-section" className={styles.container}>
			<div className={styles.content_wrapper}>
				<SectionTitle
					num={4}
					title={`Case Studies & Projects`}
					desc={`My portfolio showcases a diverse range of innovative
							solutions that push the boundaries of technology.
							From developing cutting-edge AI chatbots to
							architecting scalable cloud infrastructures, each
							project represents a journey of discovery and
							innovation. Dive in to see how I'm shaping the
							future of technology through continuous learning and
							bold experimentation. These case studies not only
							showcase technical expertise but also highlight my
							ability to lead teams, navigate complex regulatory
							environments, and deliver solutions that drive
							tangible business value.`}
				/>
				<div className={styles.card_box}>{render_cards()}</div>
			</div>
		</section>
	);
}
