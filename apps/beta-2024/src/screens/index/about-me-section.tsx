import Image from "next/image";
import { founder } from "@2024/assets/img";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import SectionTitle from "@2024/components/atoms/section-title";
import { useTranslation } from "@2024/config/i18n/client";

type AboutMeSectionProps = {
	lng: string;
};

const styles = {
	container: "h-full w-screen",
	container_wrapper:
		"h-full w-full | flex flex-col justify-center items-center | space-y-8 px-12",
	content_layout: "| md:grid md:grid-cols-7 md:gap-4 | md:space-x-8",
	content_inner_wrapper:
		"w-full col-span-4 | flex flex-col justify-center items-start | space-y-4",
	heading: `${bebas_neue.className} text-primary text-center md:text-left font-bold text-[2rem] tracking-wide`,
	heading_desc:
		"md:w-fit text-secondary text-justify text-[1.25rem] | space-y-4 md:pr-10",
	btn_box: "text-secondary text-justify",
	learn_more_btn_box: "text-secondary text-justify",
	learn_more_btn: "bg-neutral-800 text-white",
	learn_more_inner_wrapper: "flex justify-center items-center | space-x-2",
	bio_img_box:
		"hidden md:col-span-3 | md:flex md:justify-center md:items-center",
	bio_img: "rounded-md scale-115 shadow-2xl shadow-black",
} as const;

export default function AboutMeSection({ lng }: AboutMeSectionProps) {
	const { t } = useTranslation(lng, "about");

	return (
		<section id="about-me-section" className={styles.container}>
			<div className={styles.container_wrapper}>
				<SectionTitle
					num={1}
					title={t("page.title")}
					desc={t("page.desc")}
				/>
				<div className={styles.content_layout}>
					<div className={styles.content_inner_wrapper}>
						<div className={styles.heading}>
							{t("page.heading")}
						</div>
						<div className={styles.heading_desc}>
							<p>{t("page.bio")}</p>
						</div>
						<div className={styles.learn_more_btn_box}>
							<Button
								variant="outline"
								className={styles.learn_more_btn}
							>
								<div
									className={styles.learn_more_inner_wrapper}
								>
									<div>{t("page.learn_more_btn")}</div>
									<ArrowTopRightIcon />
								</div>
							</Button>
						</div>
					</div>
					<div className={styles.bio_img_box}>
						<Image
							src={founder}
							alt="about-section-img"
							className={styles.bio_img}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
