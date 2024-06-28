const styles = {
	container: "",
	content_wrapper: "",
} as const;

export default function ContactSection() {
	return (
		<section id="contact" className={styles.container}>
			<div className={styles.content_wrapper}></div>
		</section>
	);
}
