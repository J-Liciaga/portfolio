"use client";

import Image from "next/image";
import { WobbleCard } from "@lucky-ui/animated/wobble-card";
import { footer_logo } from "@2024/assets/img";
import { bebas_neue } from "@lucky-ui/assets/fonts";

const styles = {
	container: "h-screen w-screen",
	content_wrapper: "h-full w-full | p-32 space-y-8",
} as const;

export default function ServicesSection() {
	return (
		<section id="my-services" className={styles.container}>
			<div className={styles.content_wrapper}>
				<div
					className={`${bebas_neue.className} text-primary font-bold text-[2rem] tracking-wide`}
				>
					Case Studies & Projects
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
							src={footer_logo}
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
							If someone yells “stop!”, goes limp, or taps out,
							the fight is over.
						</p>
					</WobbleCard>
					<WobbleCard containerClassName="col-span-1">
						<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							DIGITAL GARDEN
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							If someone yells “stop!”, goes limp, or taps out,
							the fight is over.
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
							src={footer_logo}
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
