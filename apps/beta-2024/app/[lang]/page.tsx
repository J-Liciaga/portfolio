"use client";

// import InteractiveBubble from "@2024/components/atoms/interactive-bubble";
import {
	AboutMeSection,
	ExperienceSection,
	HeroSection,
	ProjectsSection,
	ServicesSection,
	TestimonialsSection,
} from "@2024/screens/index";
import { useEffect } from "react";

const styles = {
	container: "space-y-32",
};

export default function IndexPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotive_scroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<div className={styles.container}>
			<HeroSection />
			<AboutMeSection />
			<ServicesSection />
			<ExperienceSection />
			<ProjectsSection />
			<TestimonialsSection />
		</div>
	);
}
