import {
	AboutSection,
	ContactSection,
	HeroSection,
	ServicesSection,
} from "@2024/screens/index/sections";

export default function IndexPage() {
	return (
		<div className="min-h-screen min-w-screen">
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ContactSection />
		</div>
	);
}
