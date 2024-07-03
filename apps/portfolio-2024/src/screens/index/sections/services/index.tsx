"use client";

import Image from "next/image";
import { logo } from "@2024/assets/img";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { HoverEffect } from "@lucky-ui/animated/card-hover-effect";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { projects } from "./_cards";

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | px-32 space-y-8",
} as const;

export default function ServicesSection() {
	return (
		<section id="my-services" className={styles.container}>
			<div className={styles.content_wrapper}>
				<div className="flex flex-col">
					<div
						className={`${bebas_neue.className} text-primary font-bold text-[4rem] tracking-wide`}
					>
						My Services
					</div>
					<div className="text-[1.25rem] font-extralight text-secondary">
						Whether you need a complete web application, an
						AI-powered tool, or a security assessment, I have the
						skills to bring your project to life. Let&apos;s
						collaborate to turn your ideas into reality.
					</div>
				</div>

				<HoverEffect items={projects} />
				<div className="h-full w-full | grid grid-cols-7 gap-4 | space-x-8">
					<div className="w-full col-span-4 | flex flex-col justify-center items-start | space-y-4">
						<div
							className={`${bebas_neue.className} text-primary font-bold text-[2rem] tracking-wide`}
						>
							I pioneer seamless integrations to address intricate
							software challenges
						</div>
						<div className="w-fit text-secondary text-justify text-[1.25rem] font-extralight tracking-widest | space-y-4">
							<p>
								I believe that adopting groundbreaking,
								low-impact strategies enhances digital
								experiences and should be chosen when
								appropriate.
							</p>
							<p>
								In contrast to conventional development methods,
								these innovative approaches use advanced
								processes and minimal downtime, ensuring quicker
								implementations, elevated customer satisfaction,
								and superior results.
							</p>
						</div>
						<div className="text-secondary text-justify">
							<Button variant="outline">
								<div className="flex justify-center items-center | space-x-2">
									<div>Services</div>
									<ArrowTopRightIcon />
								</div>
							</Button>
						</div>
					</div>
					<div className="col-span-3 | flex justify-center items-center">
						<Image
							src={logo}
							height={200}
							width={200}
							alt="about-section-img"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
