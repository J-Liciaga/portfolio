const styles = {
	container: "",
	content_wrapper: "",
} as const;

export default function ServicesSection() {
	return (
		<section id="my-services" className={styles.container}>
			<div className={styles.content_wrapper}></div>
		</section>
	);
}
