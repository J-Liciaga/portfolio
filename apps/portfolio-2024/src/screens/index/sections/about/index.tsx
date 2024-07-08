"use client";

import Image from "next/image";
import { founder } from "@2024/assets/img";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const styles = {
	container: "h-full w-screen",
	section_text: `${bebas_neue.className} text-[8rem] text-secondary`,
} as const;

export default function AboutSection() {
	return (
		<section id="about" className={styles.container}>
			<div className="h-full w-full | grid grid-cols-7 gap-4 | p-32 space-x-8">
				<div className="col-span-3 | flex justify-start items-center">
					<Image
						src={founder}
						height={400}
						width={400}
						alt="about-section-img"
						className="rounded-md"
					/>
				</div>
				<div className="w-full col-span-4 | flex flex-col justify-center items-start | space-y-4">
					<div
						className={`${bebas_neue.className} text-primary font-bold text-[2rem] tracking-wide`}
					>
						I pioneer seamless integrations to address intricate
						software challenges
					</div>
					<div className="w-fit text-secondary text-justify text-[1.25rem] font-extralight tracking-widest | space-y-4 pr-10">
						<p>
							I believe that adopting groundbreaking, low-impact
							strategies enhances digital experiences and should
							be chosen when appropriate.
						</p>
						<p>
							In contrast to conventional development methods,
							these innovative approaches use advanced processes
							and minimal downtime, ensuring quicker
							implementations, elevated customer satisfaction, and
							superior results.
						</p>
					</div>
					<div className="text-secondary text-justify">
						<Button variant="outline">
							<div className="flex justify-center items-center | space-x-2">
								<div>Learn More About Me</div>
								<ArrowTopRightIcon />
							</div>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
