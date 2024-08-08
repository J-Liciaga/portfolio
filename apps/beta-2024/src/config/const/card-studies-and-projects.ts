import {
	evlware_logo,
	// wave_squad_logo,
	// digital_garden_logo,
	ava_research_logo,
} from "@lucky-ui/assets/img";

export const CASE_STUDIES_AND_PROJECTS = [
	{
		id: "evlware-card",
		label: "EVLWARE",
		desc: "An AI-powered penetration testing framework that automates and enhances cybersecurity assessments using machine learning and advanced security tools.",
		cn: "col-span-1 lg:col-span-2 h-full glass dark:bg-neutral-800 min-h-[500px] lg:min-h-[300px]",
		logo: evlware_logo,
	},
	{
		id: "wave-card",
		label: "WAVE PLATFORMS",
		desc: "An innovative social network using advanced tech for intelligent matching and real-time communication. Focused on privacy and scalability, it delivers a seamless, engaging user experience.",
		cn: "col-span-1 glass dark:bg-neutral-800",
		logo: null,
	},
	{
		id: "digital-garden-card",
		label: "DIGITAL GARDEN",
		desc: "A personalized online space for cultivating and sharing ideas. This platform transforms note-taking into an interconnected web of knowledge.",
		cn: "col-span-1 glass dark:bg-neutral-800",
		logo: null,
	},
	{
		id: "ava-research-card",
		label: "AVA RESEARCH",
		desc: "Academic Virtual Assistants an innovative platform revolutionizing information access and knowledge management. Using advanced AI, it provides instant, accurate answers to complex queries, accelerating research and enhancing productivity for organizations and academic entities.",
		cn: "col-span-1 lg:col-span-2 h-full glass dark:bg-neutral-800 min-h-[500px] lg:min-h-[300px]",
		logo: ava_research_logo,
	},
] as const;
