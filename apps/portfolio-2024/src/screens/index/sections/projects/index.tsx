const styles = {
	container: "",
	content_wrapper: "",
} as const;

export default function ExperienceSection() {
	return (
		<section id="projects" className={styles.container}>
			<div className={styles.content_wrapper}></div>
		</section>
	);
}
