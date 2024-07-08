"use client";

import Link from "next/link";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { bebas_neue } from "@lucky-ui/assets/fonts";
import Logo from "@2024/components/atoms/logo";
import ResumeDownloadBtn from "@2024/components/atoms/resume-download-btn";
import { ContactForm } from "@2024/components/atoms/contact-form";
import {
	PORTFOLIO_LINKS,
	SOCIALS_LINKS,
} from "@2024/config/const/footer-links";

const styles = {
	container: "py-4 space-y-8",
	///
	wrap_container: "h-fit w-full | px-32",
	wrap_inner_wrapper:
		"flex flex-col justify-center items-center | border rounded-md | py-5 px-5 space-y-8",
	wrap_grid: "w-full | grid grid-rows-3 gap-4",
	wrap_top_row: "row-span-2 flex flex-col justify-start items-start",
	wrap_btm_row: "flex justify-end items-center | space-x-4 | text-secondary",
	wrap_title: `${bebas_neue.className} text-[4rem] text-primary font-bold tracking-wide`,
	wrap_desc: "text-secondary font-extralight",
	///
	btn: "flex justify-center items-center | space-x-2",
	link: " border border-border text-primary bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md",
	///
	footer_container: "h-fit w-full | px-32",
	footer_inner_wrapper:
		"flex flex-col justify-center items-center | border rounded-md | py-5 px-5 space-y-8",
	footer_grid: "w-full | grid grid-cols-6 gap-4",
	footer_credits:
		"text-secondary uppercase | flex flex-col justify-center items-center",
	footer_left_box: "col-span-2",
	footer_right_box: "col-span-4 | w-full",
	footer_right_inner_wrapper: "h-full | grid grid-cols-3 gap-4",
	footer_col: "h-full | text-secondary",
	credits_note: "font-extralight text-[0.75rem]",
	credits_copyright: "flex | space-x-2 | text-[0.75rem]",
	credits_year: "text-secondary font-extralight",
	credits_creator: "text-primary font-bold",
} as const;

export default function FooterNavigation() {
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
								THAT&apos;S A WRAP!
							</div>
							<div className={styles.wrap_desc}>
								That&apos;s a wrap! Thank you for stopping by.
								This site was designed in Figma and built using
								Cursor. If you like what you&apos;ve seen, want
								to work together, or just want to chat, feel
								free to reach out. I&apos;m always interested in
								new projects and case studies.
							</div>
						</div>
						<div className={styles.wrap_btm_row}>
							<div>
								<ContactForm
									variant="outline"
									icon={ArrowTopRightIcon}
									rtl={true}
								/>
							</div>
							<div>
								<Link href="https://calendly.com/josiah-liciaga">
									<div className={styles.link}>
										<div>Schedule Consultation</div>
										<ArrowTopRightIcon />
									</div>
								</Link>
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
