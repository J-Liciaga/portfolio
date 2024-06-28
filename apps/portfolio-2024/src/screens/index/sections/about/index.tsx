const styles = {
	container: "",
	content_wrapper: "",
} as const;

export default function AboutSection() {
	return (
		<section id="about" className={styles.container}>
			<div className={styles.content_wrapper}></div>
		</section>
	);
}
