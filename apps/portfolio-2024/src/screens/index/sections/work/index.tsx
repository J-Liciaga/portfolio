"use client";

import Image from "next/image";
import { WobbleCard } from "@lucky-ui/animated/wobble-card";
import { logo } from "@2024/assets/img";
import { bebas_neue } from "@lucky-ui/assets/fonts";

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | p-32 space-y-8",
} as const;

export default function WorkSection() {
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
					<WobbleCard
						containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
						className=""
					>
						<div className="max-w-xs">
							<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								AVA RESEARCH
							</h2>
							<p className="mt-4 text-left  text-base/6 text-neutral-200">
								With over 100,000 mothly active bot users,
								Gippity AI is the most popular AI platform for
								developers.
							</p>
						</div>
						<Image
							src={logo}
							width={500}
							height={500}
							alt="linear demo image"
							className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
						/>
					</WobbleCard>
					<WobbleCard containerClassName="col-span-1">
						<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							EVLWARE
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							A personal online ecosystem for cultivating,
							connecting, and publicly sharing evolving ideas,
							notes, and knowledge in a non-linear format.
						</p>
					</WobbleCard>
					<WobbleCard containerClassName="col-span-1">
						<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							DIGITAL GARDEN
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							A personal online ecosystem for cultivating,
							connecting, and publicly sharing evolving ideas,
							notes, and knowledge in a non-linear format.
						</p>
					</WobbleCard>
					<WobbleCard
						containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
						className=""
					>
						<div className="max-w-xs">
							<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								WAVE PLATFORMS
							</h2>
							<p className="mt-4 text-left  text-base/6 text-neutral-200">
								With over 100,000 mothly active bot users,
								Gippity AI is the most popular AI platform for
								developers.
							</p>
						</div>
						<Image
							src={logo}
							width={500}
							height={500}
							alt="linear demo image"
							className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
						/>
					</WobbleCard>
				</div>
			</div>
		</section>
	);
}
