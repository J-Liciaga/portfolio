"use client";

import Image from "next/image";
import { WobbleCard } from "@lucky-ui/animated/wobble-card";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { CASE_STUDIES_AND_PROJECTS } from "@2024/config/const/card-studies-and-projects";

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | p-32 space-y-8",
} as const;

export default function WorkSection() {
	const render_cards = () => {
		return CASE_STUDIES_AND_PROJECTS.map(
			({ id, label, desc, cn, logo }) => (
				<WobbleCard key={id} containerClassName={cn}>
					<div className="max-w-xs">
						<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							{label}
						</h2>
						<p className="mt-4 text-left  text-base/6 text-neutral-200">
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
					<div
						className={`${bebas_neue.className} text-primary font-bold text-[4rem] tracking-wide`}
					>
						Case Studies & Projects
					</div>
					<div className="text-[1.25rem] font-extralight text-secondary">
						Each project represents a journey of discovery and
						innovation. Dive in to see how I&apos;m shaping the
						future of technology through continuous learning and
						bold experimentation.
					</div>
				</div>
				<div className="w-full | grid grid-cols-1 lg:grid-cols-3 gap-4">
					{render_cards()}
				</div>
			</div>
		</section>
	);
}
