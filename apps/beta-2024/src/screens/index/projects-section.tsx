"use client";

import Image from "next/image";
import { WobbleCard } from "@lucky-ui/animated/wobble-card";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { CASE_STUDIES_AND_PROJECTS } from "@2024/config/const/card-studies-and-projects";

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | px-12 space-y-8",
} as const;

export default function ProjectsSection() {
	const render_cards = () => {
		return CASE_STUDIES_AND_PROJECTS.map(
			({ id, label, desc, cn, logo }) => (
				<WobbleCard key={id} containerClassName={cn}>
					<div className="max-w-xs">
						<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-zinc-200 ">
							{label}
						</h2>
						<p className="mt-4 text-left  text-base/6 text-zinc-200">
							{desc}
						</p>
					</div>
					{logo && (
						<Image
							src={logo}
							width={500}
							height={500}
							alt="linear demo image"
							className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
						/>
					)}
				</WobbleCard>
			),
		);
	};

	return (
		<section id="my-services" className={styles.container}>
			<div className={styles.content_wrapper}>
				<div className="flex flex-col">
					<div className="flex space-x-2">
						<span
							className={`${bebas_neue.className} text-red-800 font-bold text-[4rem] tracking-wide`}
						>
							04 |
						</span>
						<span
							className={`${bebas_neue.className} font-bold text-[4rem] tracking-wide`}
						>
							Case Studies & Projects
						</span>
					</div>
					<div className="flex flex-col | text-[1.25rem] text-secondary">
						<div>
							My portfolio showcases a diverse range of innovative
							solutions that push the boundaries of technology.
							From developing cutting-edge AI chatbots to
							architecting scalable cloud infrastructures, each
							project represents a journey of discovery and
							innovation. Dive in to see how I&apos;m shaping the
							future of technology through continuous learning and
							bold experimentation. These case studies not only
							showcase technical expertise but also highlight my
							ability to lead teams, navigate complex regulatory
							environments, and deliver solutions that drive
							tangible business value.
						</div>
					</div>
				</div>
				<div className="w-full | grid grid-cols-1 lg:grid-cols-3 gap-4">
					{render_cards()}
				</div>
			</div>
		</section>
	);
}
