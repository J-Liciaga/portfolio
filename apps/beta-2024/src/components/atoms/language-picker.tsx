import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@lucky-ui/components/dropdown-menu";

import { GlobeIcon } from "@radix-ui/react-icons";

export default function LanguagePicker() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="border border-border text-primary bg-background hover:bg-accent hover:text-accent-foreground | rounded-md | h-10 px-4 py-2">
				<div className="flex justify-center items-center | space-x-2">
					<GlobeIcon />
					<div className="text-[0.80rem] font-medium">ENG</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>🇺🇸 English</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>🇪🇸 Spanish</DropdownMenuItem>
				<DropdownMenuItem>🇩🇪 German</DropdownMenuItem>
				<DropdownMenuItem>🇯🇵 Japanese</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
