"use client";

import {
	HeroSection,
	WhyMeSection,
	InvestmentInSuccessSection,
	QuickAdaptationSection,
	MyApproachSection,
} from "@2024/screens/services";
import { PRODUCTS } from "@2024/config/const/products";

// type ServicesPageProps = {
// 	lang: any;
// };

export default function ServicesPage({ lang }: any) {
	return (
		<div>
			<HeroSection products={PRODUCTS} lng={lang} />
			<div className="px-12">
				<WhyMeSection lng={lang} num={2} />
				<MyApproachSection lng={lang} num={3} />
				<QuickAdaptationSection lng={lang} num={4} />
				<InvestmentInSuccessSection lng={lang} num={5} />
			</div>
		</div>
	);
}
