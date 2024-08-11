import { useTranslation } from "@2024/config/i18n/client";
import { languages } from "@2024/config/i18n/settings";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@lucky-ui/components/dropdown-menu";
import { GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguagePickerProps = {
	lng: string;
};

export default function LanguagePicker({ lng }: LanguagePickerProps) {
	const pathname = usePathname();
	const { t } = useTranslation(lng, "common");
	const pathnameWithoutLang = pathname.replace(`/${lng}`, "") || "/";

	const render_items = () => {
		return languages.map(lang => (
			<DropdownMenuLabel key={lang}>
				<Link
					href={`/${lang}${pathnameWithoutLang}`}
					className={lang === lng ? "active" : ""}
				>
					{t(`language.${lang}`)}
				</Link>
			</DropdownMenuLabel>
		));
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="border border-border text-primary bg-background hover:bg-accent hover:text-accent-foreground | rounded-md | h-10 px-4 py-2">
				<div className="flex justify-center items-center | space-x-2">
					<GlobeIcon />
					<div className="text-[0.80rem] font-medium">
						{t(`language.lang_code.${lng}`)}
					</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>{render_items()}</DropdownMenuContent>
		</DropdownMenu>
	);
}
