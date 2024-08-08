import { bebas_neue } from "@lucky-ui/assets/fonts";
import { GlobeIcon } from "@radix-ui/react-icons";

const styles = {
	container: "h-screen w-screen",
	container_wrapper: "h-full w-full | p-12",
	hero_box:
		"h-full w-full flex flex-col justify-end items-center md:justify-end md:items-start",
	misc_box: "flex justify-start items-center | space-x-4 | leading-[4rem]",
	misc_text:
		"text-[1.25rem] text-secondary font-extralight uppercase | tracking-widest",
	misc_separator: "text-secondary",
	loc_box: "flex justify-center items-center | space-x-2",
	name_text: `${bebas_neue.className} text-[10vw] tracking-wide leading-[6rem]`,
	sub_text: `${bebas_neue.className} text-[6vw] tracking-wide leading-[4rem]`,
} as const;

export default function HeroSection() {
	return (
		<section id="hero-section" className={styles.container}>
			<div className={styles.container_wrapper}>
				<div></div>
				<div className={styles.hero_box}>
					<div className={styles.misc_box}>
						<div className={styles.misc_text}>EST. 2014</div>
						<div className={styles.misc_separator}>|</div>
						<div className={styles.loc_box}>
							<GlobeIcon />
							<div className={styles.misc_text}>
								MIAMI, FL - USA
							</div>
						</div>
					</div>
					<span className={styles.name_text}>
						JOSIAH LICIAGA SILVA
					</span>
					<span className={styles.sub_text}>
						FULL-STACK SOFTWARE ENGINEER
					</span>
					<span className={`${styles.sub_text} text-red-800`}>
						PORTFOLIO V.2024
					</span>
				</div>
			</div>
		</section>
	);
}
