import SectionTitle from "@2024/components/atoms/section-title";
import { EXPERIENCE } from "@2024/config/const/experience";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@lucky-ui/components/accordion";
import { IconCircleFilled } from "@tabler/icons-react";

const styles = {
	inner_wrapper: "px-12 space-y-8",
	accordion_box: "w-full",
	accordion: "w-full",
} as const;

export default function ExperienceSection() {
	const render_experience = () => {
		return EXPERIENCE.map(({ id, title, company, duties, dates }, idx) => (
			<AccordionItem key={id} value={id}>
				<AccordionTrigger>
					<div className="flex md:space-x-2 | font-semibold">
						<span
							className={`hidden md:block ${bebas_neue.className} text-red-800 font-bold text-[1.5rem] tracking-wide`}
						>
							{title} |
						</span>
						<span
							className={`${bebas_neue.className} font-bold text-[1.5rem] tracking-wide`}
						>
							{company}
						</span>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col | space-y-4">
						<div className="md:hidden uppercase text-red-800 text-[1.15rem] font-bold">
							{title}
						</div>
						<div className="text-[1.15rem] font-bold">{dates}</div>
						<ol className="space-y-2">
							{duties.map((duty, idx) => (
								<li key={`${idx}`}>
									<div className="w-5/6 flex space-x-2 items-center | text-[1rem] font-semibold">
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
		<div>
			<div className={styles.inner_wrapper}>
				<SectionTitle
					num={3}
					title="EXPERIENCE"
					desc={`My journey spans the full spectrum of tech environments.
						In startups, I've turned bold ideas into reality,
						crafting MVPs and scaling systems on tight budgets. In
						Fortune 500 giants, I've led global digital
						transformations and implemented cutting-edge AI
						solutions. This unique blend of startup agility and
						enterprise robustness brings a holistic perspective to
						every project, across industries from fintech to
						cybersecurity.`}
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
