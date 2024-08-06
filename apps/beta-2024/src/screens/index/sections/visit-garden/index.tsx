const styles = {
	container: "",
	content_wrapper: "",
} as const;

export default function VisitDigitalGardenSection() {
	return (
		<section id="visit-the-garden" className={styles.container}>
			<div className={styles.content_wrapper}></div>
		</section>
	);
}
