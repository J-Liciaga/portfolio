"use client";

import { useEffect } from "react";
import {
	AboutMeSection,
	ExperienceSection,
	HeroSection,
	ProjectsSection,
	ServicesSection,
	TestimonialsSection,
} from "@2024/screens/index";

type IndexPageProps = {
	params: {
		lang: string;
	};
};

const styles = {
	container: "space-y-32",
};

export default function IndexPage({ params: { lang } }: IndexPageProps) {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotive_scroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<div className={styles.container}>
			<HeroSection lng={lang} />
			<AboutMeSection lng={lang} />
			<ServicesSection lng={lang} />
			<ExperienceSection lng={lang} />
			<ProjectsSection lng={lang} />
			<TestimonialsSection lng={lang} />
		</div>
	);
}
