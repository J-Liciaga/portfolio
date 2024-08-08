import { Button } from "@lucky-ui/components/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@lucky-ui/components/dialog";
import Input from "@lucky-ui/components/input";
import Label from "@lucky-ui/components/label";
import TextArea from "@lucky-ui/components/textarea";
import { useToast } from "@lucky-ui/components/use-toast";

type ContactFormProps = {
	variant: "outline" | "ghost";
	icon: any;
	rtl: boolean;
	className?: string;
};

const styles = {
	btn: "flex justify-center items-center | space-x-2",
} as const;

export function ContactForm({
	variant = "outline",
	icon,
	rtl = false,
	className,
}: ContactFormProps) {
	const { toast } = useToast();
	const Icon = icon;
	const today = new Date();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={variant} className={className}>
					<div className={styles.btn}>
						{rtl ? (
							<>
								<div>Contact</div>
								<Icon />
							</>
						) : (
							<>
								<Icon />
								<div>Contact</div>
							</>
						)}
					</div>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Contact Me</DialogTitle>
					<DialogDescription>
						Send me a message and I&apos;ll get back to you as soon
						as possible.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Full Name
						</Label>
						<Input
							id="name"
							placeholder="John Wick"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Email
						</Label>
						<Input
							id="email"
							placeholder="baba_yaga@no_burners.you"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Subject
						</Label>
						<Input
							id="subject"
							placeholder="eg. Pancake Recipe"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Message
						</Label>
						<TextArea
							id="message"
							placeholder="eg. I really like pancakes."
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							type="submit"
							className="bg-red-800"
							onClick={() => {
								toast({
									title: "Message Sent",
									description: `${today}`,
								});
							}}
						>
							Send Message
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
