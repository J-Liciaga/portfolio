"use client";

import { useRef, useEffect } from "react";

export default function InteractiveBubble() {
	const bubbleRef = useRef(null);
	const curXRef = useRef(0);
	const curYRef = useRef(0);
	const tgXRef = useRef(0);
	const tgYRef = useRef(0);

	useEffect(() => {
		const move = () => {
			curXRef.current += (tgXRef.current - curXRef.current) / 20;
			curYRef.current += (tgYRef.current - curYRef.current) / 20;

			if (bubbleRef.current) {
				bubbleRef.current.style.transform = `translate(${Math.round(
					curXRef.current,
				)}px, ${Math.round(curYRef.current)}px)`;
			}

			requestAnimationFrame(move);
		};

		const handleMouseMove = event => {
			tgXRef.current = event.clientX;
			tgYRef.current = event.clientY;
		};

		window.addEventListener("mousemove", handleMouseMove);
		move();

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return <div ref={bubbleRef} className="interactive" />;
}
