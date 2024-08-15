"use client";

import { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@2024/config/i18n/client";

type Product = {
	title: string;
	link: string;
	thumbnail: string;
};

type HeroSectionProps = {
	lng: string;
	products: Product[];
};

const styles = {
	// product card
	product_container: "group/product h-96 w-[30rem] relative flex-shrink-0",
	link: "block group-hover/product:shadow-2xl",
	link_img: "object-cover object-left-top absolute h-full w-full inset-0",
	spacer: "absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none",
	product_title:
		"absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white",
	// hero section
	container:
		"h-[275vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",
	floating_box:
		"max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full flex flex-col justify-center items-center left-0 top-0",
	title: "text-2xl md:text-7xl text-center font-bold text-red-800",
	subtitle: "max-w-2xl text-base text-center md:text-xl mt-8 text-red-800",
	first_row: "flex flex-row-reverse space-x-reverse space-x-20 mb-20",
	second_row: "flex flex-row  mb-20 space-x-20",
	third_row: "flex flex-row-reverse space-x-reverse space-x-20",
} as const;

function ProductCard({
	product,
	translate,
}: {
	product: Product;
	translate: MotionValue<number>;
}) {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className={styles.product_container}
		>
			<Link href={product.link} className={styles.link}>
				<Image
					src={product.thumbnail}
					height="600"
					width="600"
					className={styles.link_img}
					alt={product.title}
				/>
			</Link>
			<div className={styles.spacer} />
			<h2 className={styles.product_title}>{product.title}</h2>
		</motion.div>
	);
}

export default function HeroSection({ lng, products }: HeroSectionProps) {
	const { t } = useTranslation(lng, "services");

	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = {
		stiffness: 300,
		damping: 30,
		bounce: 100,
	};

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig,
	);

	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig,
	);

	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig,
	);

	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig,
	);

	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig,
	);

	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig,
	);

	return (
		<div ref={ref} className={styles.container}>
			<div className={styles.floating_box}>
				<h1 className={styles.title}>
					{t("page.content.hero_section.title")} <br />
					{t("page.content.hero_section.subtitle")}
				</h1>
				<p className={styles.subtitle}>
					{t("page.content.hero_section.description")}
				</p>
			</div>
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
			>
				<motion.div className={styles.first_row}>
					{firstRow.map(product => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className={styles.second_row}>
					{secondRow.map(product => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className={styles.third_row}>
					{thirdRow.map(product => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
