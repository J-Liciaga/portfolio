import { footer_logo } from "@2024/assets/img";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function FooterNavigation() {
	return (
		<footer className="h-fit w-full | px-32 py-12">
			<div className="border | py-5 px-5 | rounded-md | space-y-8 | flex flex-col justify-center items-center">
				<div className="w-full | grid grid-cols-6 gap-4">
					<div className="col-span-2">
						<Link href="/">
							<div>
								<Image
									src={footer_logo}
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
	);
}
