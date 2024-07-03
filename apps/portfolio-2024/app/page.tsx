import {
	AboutSection,
	ContactSection,
	HeroSection,
	TestimonialsSection,
	ServicesSection,
} from "@2024/screens/index/sections";

export default function IndexPage() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<TestimonialsSection />
			<ContactSection />
		</div>
	);
}
