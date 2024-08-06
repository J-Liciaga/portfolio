import { Button } from "@lucky-ui/components/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const styles = {
	btn: "flex justify-center items-center | space-x-2",
} as const;

export default function ResumeDownloadBtn() {
	const download_resume = () => {
		// const pdfUrl = "Sample.pdf";
		// const link = document.createElement("a");
		// link.href = pdfUrl;
		// link.download = "document.pdf"; // specify the filename
		// document.body.appendChild(link);
		// link.click();
		// document.body.removeChild(link);
	};

	return (
		<Button variant="ghost" onClick={() => download_resume()}>
			<div className={styles.btn}>
				<div>Resume</div>
				<ArrowTopRightIcon />
			</div>
		</Button>
	);
}
