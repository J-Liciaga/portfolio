"use client";

import { bebas_neue } from "@lucky-ui/assets/fonts";
import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const styles = {
	container: "h-full w-screen",
	section_text: `${bebas_neue.className} text-[8rem] text-secondary`,
} as const;

export default function AboutSection() {
	return (
		<section id="about" className={styles.container}>
			<div className="h-full w-full | grid grid-cols-7 gap-4 | p-32 space-x-8">
				<div className="col-span-3 | flex justify-center items-center">
					IMG
				</div>
				<div className="w-full col-span-4 | flex flex-col justify-center items-start | space-y-4">
					<div
						className={`${bebas_neue.className} text-primary font-bold text-[2rem] tracking-wide`}
					>
						I pioneer seamless integrations to address intricate
						software challenges
					</div>
					<div className="text-secondary text-justify text-[1.25rem] font-extralight tracking-widest | space-y-4">
						<p>
							I believe that adopting groundbreaking, low-impact
							strategies enhances digital experiences and should
							be chosen when appropriate.
						</p>
						<p>
							In contrast to conventional development methods,
							these innovative approaches use advanced processes
							and minimal downtime, ensuring quicker
							implementations, elevated customer satisfaction, and
							superior results.
						</p>
					</div>
					<div className="text-secondary text-justify">
						<Button variant="outline">
							<div className="flex justify-center items-center | space-x-2">
								<div>Learn More About Me</div>
								<ArrowTopRightIcon />
							</div>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

{
	/* <div className={styles.content_wrapper}>
				<div className={`${styles.section_text} w-4/6`}>
					<div>
						GET TO
					</div>
					<div>
						KNOW ME
					</div>
				</div>
				<div className="h-full w-fit |  | pt-12 space-y-8">
					<div className="space-y-4">
						<div className="text-primary text-[1.75rem] font-bold | flex justify-start items-center | space-x-2">
							<InfoCircledIcon/>
							<span>BIO</span>
						</div>
						<div className="w-5/6 | text-secondary text-[1.25rem]">
							My name is Josiah Liciaga-Silva. I am a Full-Stack Engineer currently focusing on Generative AI. 
							Most of my experience lies in Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae 
							nesciunt modi sunt deserunt voluptates laudantium atque eum fugit, nisi velit blanditiis cumque soluta 
							vero, amet praesentium nemo quo nihil incidunt?
						</div>
					</div>
					<div className="space-y-4">
						<div className="text-primary text-[1.75rem] font-bold | flex justify-start items-center | space-x-2">
							<InfoCircledIcon/>
							<span>EXPERIENCE</span>
						</div>
						<div>
							<ScrollArea className="h-[35vh]"> 
								<div className="p-4">
								
								</div>	
							</ScrollArea>
						</div>
					</div>
				</div>
			</div> */
}

{
	/* <div className={styles.content_wrapper}>
				<div className={`text-[3.5rem] text-primary ${bebas_neue.className}`}>
					ABOUT ME
				</div>
				<div>
					My name is Josiah Liciaga-Silva. I am a Full-Stack Software Engineer currently focusing on Artificial Intelligence where I focus 
					mainly on its anthropomorphic properties. Most of my experience lies in creating digital experiences, working on both design and web/mobile development
					as well as on creating the architecture for the back-end. 
				</div>
				<div className={`text-[3.5rem] text-primary ${bebas_neue.className}`}>
					BRANDS I&apos;VE WORKED WITH
				</div>	
			</div> */
}

{
	/* <ScrollArea className="h-[35vh] rounded-md border"> */
}
{
	/* <div className="p-4"> */
}
{
	/* <Accordion type="single" collapsible className="w-full">
										<AccordionItem value="item-1">
											<AccordionTrigger>Is it accessible?</AccordionTrigger>
											<AccordionContent>
												Yes. It adheres to the WAI-ARIA design pattern.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-2">
											<AccordionTrigger>Is it styled?</AccordionTrigger>
											<AccordionContent>
												Yes. It comes with default styles that matches the other
												components&apos; aesthetic.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-3">
											<AccordionTrigger>Is it animated?</AccordionTrigger>
											<AccordionContent>
												Yes. It&apos;s animated by default, but you can disable it if you
												prefer.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-3">
											<AccordionTrigger>Is it animated?</AccordionTrigger>
											<AccordionContent>
												Yes. It&apos;s animated by default, but you can disable it if you
												prefer.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-3">
											<AccordionTrigger>Is it animated?</AccordionTrigger>
											<AccordionContent>
												Yes. It&apos;s animated by default, but you can disable it if you
												prefer.
											</AccordionContent>
										</AccordionItem>
									</Accordion> */
}
{
	/* </div>
							</ScrollArea> */
}
