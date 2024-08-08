"use client";

import { HoverEffect } from "@lucky-ui/animated/card-hover-effect";
import SectionTitle from "@2024/components/atoms/section-title";
import { PROJECTS } from "@2024/config/const/projects";

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | px-12 space-y-8",
} as const;

export default function ServicesSection() {
	return (
		<section id="services-section" className={styles.container}>
			<div className={styles.content_wrapper}>
				<SectionTitle
					num={2}
					title="SERVICES"
					desc={`I offer comprehensive software engineering solutions
						with a focus on AI and machine learning. My services
						span full-stack development, cloud architecture, and
						data engineering, all underpinned by a commitment to
						security and performance. Leveraging cutting-edge
						technologies, I design and implement scalable, efficient
						systems that drive innovation. From leading
						cross-functional teams to modernizing legacy systems, I
						bring a wealth of experience to every project. Whether
						you're looking to optimize your development
						processes, implement AI-driven solutions, or transform
						your digital infrastructure, I have the expertise to
						turn your vision into reality.`}
				/>
				<div>
					<HoverEffect items={PROJECTS} />
				</div>
			</div>
		</section>
	);
}
