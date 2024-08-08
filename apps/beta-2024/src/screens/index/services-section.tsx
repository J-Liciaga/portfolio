"use client";

import Image from "next/image";
import { logo } from "@2024/assets/img";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { HoverEffect } from "@lucky-ui/animated/card-hover-effect";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const projects = [
	{
		title: "UX/UI Design",
		description:
			"I craft engaging user experiences across web, desktop, and mobile. From sleek designs to intuitive interactions, I transform ideas into digital realities that users love. Let's create interfaces that captivate and inspire",
		link: "https://jliciaga.dev/services/ux-ui",
	},
	{
		title: "Front-End",
		description:
			"I build lightning-fast, accessible web applications that delight users and drive results. Optimized for speed, crafted for inclusivity, and engineered for cost-efficiency. Let's create robust, scalable front-end solutions that stand out in the digital landscape.",
		link: "https://jliciaga.dev/services/front-end",
	},
	{
		title: "Back-End",
		description:
			"I architect robust, scalable server-side systems that power seamless user experiences. From efficient APIs to high-performance databases, I build secure, optimized backends that handle complex operations with ease. Let's create the solid foundation your digital products need to thrive.",
		link: "https://jliciaga.dev/services/back-end",
	},
	{
		title: "ML/AI",
		description:
			"I build AI systems that generate content, answer queries, and automate complex tasks. From custom chatbots and virtual assistants to text summarization and code generation tools, I leverage cutting-edge language models to enhance productivity and innovation. ",
		link: "https://jliciaga.dev/services/machine-learning",
	},
	{
		title: "Cyber Security",
		description:
			"I simulate advanced cyber threats to fortify your defenses. From penetration testing and social engineering to custom exploit development, I uncover vulnerabilities before real attackers do. Let's stress-test your security and build unbreakable defenses through ethical hacking",
		link: "https://jliciaga.dev/services/cybersecurity",
	},
];

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | px-12 space-y-8",
} as const;

export default function ServicesSection() {
	return (
		<section id="my-services" className={styles.container}>
			<div className={styles.content_wrapper}>
				<div className="flex flex-col">
					<div className="flex space-x-2">
						<span
							className={`${bebas_neue.className} text-red-800 font-bold text-[4rem] tracking-wide`}
						>
							02 |
						</span>
						<span
							className={`${bebas_neue.className} font-bold text-[4rem] tracking-wide`}
						>
							SERVICES
						</span>
					</div>
					<div className="text-[1.25rem] text-secondary">
						I offer comprehensive software engineering solutions
						with a focus on AI and machine learning. My services
						span full-stack development, cloud architecture, and
						data engineering, all underpinned by a commitment to
						security and performance. Leveraging cutting-edge
						technologies, I design and implement scalable, efficient
						systems that drive innovation. From leading
						cross-functional teams to modernizing legacy systems, I
						bring a wealth of experience to every project. Whether
						you&apos;re looking to optimize your development
						processes, implement AI-driven solutions, or transform
						your digital infrastructure, I have the expertise to
						turn your vision into reality.
					</div>
				</div>
				<div>
					<HoverEffect items={projects} />
				</div>
			</div>
		</section>
	);
}
