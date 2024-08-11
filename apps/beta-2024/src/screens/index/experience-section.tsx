import SectionTitle from "@2024/components/atoms/section-title";
import EXPERIENCE_FACTORY from "@2024/config/const/experience";
import { useTranslation } from "@2024/config/i18n/client";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@lucky-ui/components/accordion";
import { IconCircleFilled } from "@tabler/icons-react";

type ExperienceSectionProps = {
	lng: string;
};

const styles = {
	inner_wrapper: "px-12 space-y-8",
	accordion_box: "w-full",
	accordion: "w-full",
	// accordion
	acc_trigger: "flex md:space-x-2 | font-semibold",
	acc_trigger_title: `hidden md:block ${bebas_neue.className} text-red-800 font-bold text-[1.5rem] tracking-wide`,
	acc_trigger_comp: `${bebas_neue.className} font-bold text-[1.5rem] tracking-wide`,
	acc_content_wrapper: "flex flex-col | space-y-4",
	acc_content_mob_title:
		"md:hidden uppercase text-red-800 text-[1.15rem] font-bold",
	acc_content_dates: "text-[1.15rem] font-bold",
	acc_content_list: "space-y-2",
	acc_content_list_item:
		"w-5/6 flex space-x-2 items-center | text-[1rem] font-semibold",
} as const;

export default function ExperienceSection({ lng }: ExperienceSectionProps) {
	const { t } = useTranslation(lng, "experience");
	const EXPERIENCE = EXPERIENCE_FACTORY(lng);

	const render_experience = () => {
		return EXPERIENCE.map(({ id, title, company, duties, dates }, idx) => (
			<AccordionItem key={id} value={id}>
				<AccordionTrigger>
					<div className={styles.acc_trigger}>
						<span className={styles.acc_trigger_title}>
							{title} |
						</span>
						<span className={styles.acc_trigger_comp}>
							{company}
						</span>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className={styles.acc_content_wrapper}>
						<div className={styles.acc_content_mob_title}>
							{title}
						</div>
						<div className={styles.acc_content_dates}>{dates}</div>
						<ol className={styles.acc_content_list}>
							{duties.map((duty: string, idx: number) => (
								<li key={`${idx}`}>
									<div
										className={styles.acc_content_list_item}
									>
										<span>
											<IconCircleFilled
												height={8}
												width={8}
											/>
										</span>
										<span>{duty}</span>
									</div>
								</li>
							))}
						</ol>
					</div>
				</AccordionContent>
			</AccordionItem>
		));
	};

	return (
		<div id="experience-section">
			<div className={styles.inner_wrapper}>
				<SectionTitle
					num={3}
					title={t("page.title")}
					desc={t("page.intro")}
				/>
				<div className={styles.accordion_box}>
					<Accordion
						type="single"
						collapsible
						className={styles.accordion}
					>
						{render_experience()}
					</Accordion>
				</div>
			</div>
		</div>
	);
}
