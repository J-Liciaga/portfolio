// import ParticleScene from "@2024/components/atoms/particle-scene";
import { useTranslation } from "@2024/config/i18n/client";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { GlobeIcon } from "@radix-ui/react-icons";

type HeroSectionProps = {
	lng: string;
};

const styles = {
	container: "h-screen w-screen",
	container_wrapper: "h-full w-full | p-12",
	bkg_box: "h-full w-full absolute top-0 left-0 z-0",
	hero_box:
		"relative z-2 h-full w-full flex flex-col justify-end items-center md:justify-end md:items-start",
	misc_box: "flex justify-start items-center | space-x-4 | leading-[4rem]",
	misc_text:
		"text-[1.25rem] text-secondary font-extralight uppercase | tracking-widest",
	misc_separator: "text-secondary",
	loc_box: "flex justify-center items-center | space-x-2",
	name_text: `${bebas_neue.className} text-[10vw] tracking-wide leading-[6rem]`,
	title_text: `${bebas_neue.className} text-[6vw] tracking-wide leading-[4rem]`,
	sub_text: `${bebas_neue.className} text-[6vw] tracking-wide leading-[4rem] text-red-800`,
} as const;

export default function HeroSection({ lng }: HeroSectionProps) {
	const { t } = useTranslation(lng, "hero");

	return (
		<section id="hero-section" className={styles.container}>
			<div className={styles.container_wrapper}>
				{/* <div className={styles.bkg_box}>
					<ParticleScene/>
				</div> */}
				<div className={styles.hero_box}>
					<div className={styles.misc_box}>
						<div className={styles.misc_text}>{t("page.est")}</div>
						<div className={styles.misc_separator}>|</div>
						<div className={styles.loc_box}>
							<GlobeIcon />
							<div className={styles.misc_text}>
								{t("page.loc")}
							</div>
						</div>
					</div>
					<span className={styles.name_text}>{t("page.name")}</span>
					<span className={styles.title_text}>{t("page.title")}</span>
					<span className={styles.sub_text}>
						{t("page.subtitle")}
					</span>
				</div>
			</div>
		</section>
	);
}
