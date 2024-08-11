"use client";

import Link from "next/link";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import Logo from "@2024/components/atoms/logo";
import ResumeDownloadBtn from "@2024/components/atoms/resume-download-btn";
import { ContactForm } from "@2024/components/atoms/contact-form";
import {
	PORTFOLIO_LINK_FACTORY,
	SOCIALS_LINKS,
} from "@2024/config/const/footer-links";
import { useTranslation } from "@2024/config/i18n/client";

type FooterNavigationProps = {
	lng: string;
};

const styles = {
	container: "mt-32 py-4 space-y-8",
	///
	wrap_container: "h-fit w-full | px-12",
	wrap_inner_wrapper:
		"flex flex-col justify-center items-center | border rounded-md | py-5 px-5 space-y-8 | glass",
	wrap_grid: "w-full | grid grid-rows-3 gap-4",
	wrap_top_row:
		"relative | row-span-2 flex flex-col justify-start items-start",
	wrap_btm_row: "flex justify-end items-center | space-x-4 | text-secondary",
	wrap_title: `${bebas_neue.className} text-[4rem] text-primary font-bold tracking-wide`,
	wrap_desc: "text-secondary font-extralight",
	///
	btn: "flex justify-center items-center | space-x-2",
	link: "flex justify-center items-center | space-x-2",
	///
	footer_container: "h-fit w-full | px-12",
	footer_inner_wrapper:
		"flex flex-col justify-center items-center | border rounded-md | py-5 px-5 space-y-8 | glass",
	footer_grid: "w-full | grid grid-cols-6 gap-4",
	footer_credits:
		"text-secondary uppercase | flex flex-col justify-center items-center",
	footer_left_box: "col-span-2 hidden md:block",
	footer_right_box: "hidden md:block col-span-4 | w-full",
	footer_right_inner_wrapper: "h-full | grid grid-cols-3 gap-4",
	footer_col: "h-full | text-secondary",
	credits_note: "font-extralight text-[0.75rem]",
	credits_copyright: "flex | space-x-2 | text-[0.75rem]",
	credits_year: "text-secondary font-extralight",
	credits_creator: "text-primary font-bold",
} as const;

export default function FooterNavigation({ lng }: FooterNavigationProps) {
	const { t } = useTranslation(lng, "common");

	const PORTFOLIO_LINKS = PORTFOLIO_LINK_FACTORY(lng);

	const render_links = (links: any) => {
		return links.map(({ id, label, href }: any) => (
			<div key={id}>
				<Button variant="ghost" key={id}>
					<Link className={styles.btn} href={href}>
						<div>{label}</div>
						<ArrowTopRightIcon />
					</Link>
				</Button>
			</div>
		));
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrap_container}>
				<div className={styles.wrap_inner_wrapper}>
					<div className={styles.wrap_grid}>
						<div className={styles.wrap_top_row}>
							<div className={styles.wrap_title}>
								{t("footer.conclusion.title")}
							</div>
							<div className={styles.wrap_desc}>
								{t("footer.conclusion.outro")}
							</div>
						</div>
						<div className={styles.wrap_btm_row}>
							<div>
								<ContactForm
									variant="outline"
									icon={ArrowTopRightIcon}
									rtl={true}
									className="bg-neutral-800 text-white"
								/>
							</div>
							<div>
								<Button
									variant={"default"}
									className="bg-neutral-800 hover:bg-accent"
								>
									<Link href="https://calendly.com/josiah-liciaga">
										<div className={styles.link}>
											<div>Schedule Consultation</div>
											<ArrowTopRightIcon />
										</div>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className={styles.footer_container}>
				<div className={styles.footer_inner_wrapper}>
					<div className={styles.footer_grid}>
						<div className={styles.footer_left_box}>
							<Logo height={200} width={200} />
						</div>
						<div className={styles.footer_right_box}>
							<div className={styles.footer_right_inner_wrapper}>
								<div className={styles.footer_col}>
									{render_links(PORTFOLIO_LINKS)}
								</div>
								<div className={styles.footer_col}>
									<div>
										<ResumeDownloadBtn />
									</div>
									<div>
										<ContactForm
											variant="ghost"
											icon={ArrowTopRightIcon}
											rtl={true}
										/>
									</div>
								</div>
								<div className={styles.footer_col}>
									{render_links(SOCIALS_LINKS)}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.footer_credits}>
						<div className={styles.credits_note}>
							Designed and Developed by Josiah Liciaga
						</div>
						<div className={styles.credits_copyright}>
							<div className={styles.credits_year}>©2024</div>
							<div className={styles.credits_creator}>
								Josiah Liciaga
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
