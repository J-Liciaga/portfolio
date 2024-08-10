"use client";

import Image from "next/image";
import { WobbleCard } from "@lucky-ui/animated/wobble-card";
import PROJECTS_FACTORY from "@2024/config/const/card-studies-and-projects";
import SectionTitle from "@2024/components/atoms/section-title";
import { IconExternalLink } from "@tabler/icons-react";
import { LinkPreview } from "@lucky-ui/animated/link-preview";
import { useTranslation } from "@2024/config/i18n/client";

type ProjectsSectionProps = {
	lng: string;
};

const styles = {
	container: "h-fit w-screen",
	content_wrapper: "h-full w-full | px-12 space-y-8",
	card_box: "w-full | grid grid-cols-1 lg:grid-cols-3 gap-4",
	card_content_wrapper: "max-w-xs",
	card_label:
		"text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-zinc-200",
	card_desc: "mt-4 text-left  text-base/6 text-zinc-200",
	logo_img:
		"hidden md:block absolute -right-4 lg:-right-[25%] grayscale filter -bottom-10 object-contain rounded-2xl",
} as const;

export default function ProjectsSection({ lng }: ProjectsSectionProps) {
	const PROJECTS = PROJECTS_FACTORY(lng);
	const { t } = useTranslation(lng, "projects");

	const render_cards = () => {
		return PROJECTS.map(({ id, label, desc, cn, logo }) => (
			<WobbleCard key={id} containerClassName={cn}>
				<div className={styles.card_content_wrapper}>
					<h2 className={styles.card_label}>{label}</h2>
					<p className={styles.card_desc}>{desc}</p>
				</div>
				{logo && (
					<Image
						src={logo}
						width={500}
						height={500}
						alt="linear demo image"
						className={styles.logo_img}
					/>
				)}
				<div className="absolute bottom-4 flex justify-start items-center pt-6 space-x-6">
					<div className="bg-transparent text-white border-white">
						Status: Ongoing
					</div>
					<LinkPreview url="https://framer.com/motion">
						<div className="flex justify-center items-center | space-x-2">
							<div>VISIT</div>
							<IconExternalLink />
						</div>
					</LinkPreview>
				</div>
			</WobbleCard>
		));
	};

	return (
		<section id="case-studies-section" className={styles.container}>
			<div className={styles.content_wrapper}>
				<SectionTitle
					num={4}
					title={t("page.section_title")}
					desc={t("page.section_intro")}
				/>
				<div className={styles.card_box}>{render_cards()}</div>
			</div>
		</section>
	);
}
