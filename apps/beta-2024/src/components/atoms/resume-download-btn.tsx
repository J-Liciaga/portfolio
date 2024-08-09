import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type ResumeDownloadBtnProps = {
	className?: string;
};

const styles = {
	btn: "h-full w-full flex justify-center items-center | space-x-2",
} as const;

export default function ResumeDownloadBtn({
	className,
}: ResumeDownloadBtnProps) {
	return (
		<Button variant="ghost" className={className}>
			<Link
				href="/josiah-liciaga-resume-2024.pdf"
				target="_blank"
				rel="noopener noreferrer"
				passHref
				className="h-full w-full"
			>
				<div className={styles.btn}>
					<div>Resume</div>
					<ArrowTopRightIcon />
				</div>
			</Link>
		</Button>
	);
}
