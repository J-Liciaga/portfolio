import {
	AboutSection,
	ContactSection,
	HeroSection,
	ProjectsSection,
} from "@2024/screens/index/sections";

export default function IndexPage() {
	return (
		<div className="min-h-screen min-w-screen">
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
