import { Button } from "@lucky-ui/components/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@lucky-ui/components/dialog";
import Input from "@lucky-ui/components/input";
import Label from "@lucky-ui/components/label";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

type ContactFormProps = {
	variant: "outline" | "ghost";
	icon: any;
	rtl: boolean;
};

const styles = {
	btn: "flex justify-center items-center | space-x-2",
} as const;

export function ContactForm({
	variant = "outline",
	icon,
	rtl = false,
}: ContactFormProps) {
	const Icon = icon;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={variant}>
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
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when
						you&apos;re done.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							id="name"
							defaultValue="Pedro Duarte"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Username
						</Label>
						<Input
							id="username"
							defaultValue="@peduarte"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
