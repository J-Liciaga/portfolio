import { bebas_neue } from "@lucky-ui/assets/fonts";

type SectionTitleProps = {
	num: number;
	title: string;
	desc?: string;
};

const styles = {
	section_box: "flex justify-center md:justify-start | space-x-2",
	sec_num: `hidden md:block ${bebas_neue.className} text-red-800 font-bold text-[4rem] tracking-wide`,
	sec_title: `${bebas_neue.className} font-bold text-[4rem] tracking-wide text-red-800 md:text-neutral-800`,
	sec_desc: "md:w-fit text-secondary text-justify text-[1.25rem] | space-y-4",
} as const;

export default function SectionTitle({ num, title, desc }: SectionTitleProps) {
	return (
		<div>
			<div className={styles.section_box}>
				<span className={styles.sec_num}>0{num} |</span>
				<span className={styles.sec_title}>{title}</span>
			</div>
			<div className={styles.sec_desc}>{desc}</div>
		</div>
	);
}
