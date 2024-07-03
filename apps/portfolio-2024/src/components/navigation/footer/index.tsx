import { logo } from "@2024/assets/img";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { bebas_neue } from "@lucky-ui/assets/fonts";

export default function FooterNavigation() {
	return (
		<>
			<div className="h-fit w-full | px-32 py-4">
				<div className="border | py-5 px-5 | rounded-md | space-y-8 | flex flex-col justify-center items-center">
					<div className="w-full | grid grid-rows-3 gap-4">
						<div className="row-span-2 flex flex-col justify-start items-start">
							<div
								className={`${bebas_neue.className} text-[4rem] text-primary font-bold tracking-wide`}
							>
								THAT&apos;S A WRAP!
							</div>
							<div className="text-secondary font-extralight">
								That&apos;s a wrap! Thank you for stopping by.
								This site was designed in Figma and built using
								Cursor. If you like what you&apos;ve seen, want
								to work together, or just want to chat, feel
								free to reach out. I&apos;m always interested in
								new projects and case studies.
							</div>
						</div>
						<div className="flex justify-end items-center | space-x-4 | text-secondary">
							<div>
								<Button variant="outline">
									<div className="flex justify-center items-center | space-x-2">
										<div>Contact</div>
										<ArrowTopRightIcon />
									</div>
								</Button>
							</div>
							<div>
								<Button variant="outline">
									<div className="flex justify-center items-center | space-x-2">
										<div>Schedule Consultation</div>
										<ArrowTopRightIcon />
									</div>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="h-fit w-full | px-32 py-4">
				<div className="border | py-5 px-5 | rounded-md | space-y-8 | flex flex-col justify-center items-center">
					<div className="w-full | grid grid-cols-6 gap-4">
						<div className="col-span-2">
							<Link href="/">
								<div>
									<Image
										src={logo}
										height={200}
										width={200}
										alt="footer-logo"
									/>
								</div>
							</Link>
						</div>
						<div className="col-span-4 | w-full">
							<div className="h-full | grid grid-cols-3 gap-4">
								<div className="h-full | text-secondary">
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>About Me</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>Services</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>Case Studies</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
								</div>
								<div className="h-full | text-secondary">
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>Resume</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>Contact</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
								</div>
								<div className="h-full | text-secondary">
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>LinkedIn</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>Github</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
									<div>
										<Button variant="ghost">
											<div className="flex justify-center items-center | space-x-2">
												<div>The Garden</div>
												<ArrowTopRightIcon />
											</div>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-secondary uppercase | flex flex-col justify-center items-center">
						<div className="font-extralight text-[0.75rem]">
							Designed and Developed by Josiah Liciaga
						</div>
						<div className="flex | space-x-2 | text-[0.75rem]">
							<div className="text-secondary font-extralight">
								© 2024
							</div>
							<div className="text-primary font-bold">
								Josiah Liciaga
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
