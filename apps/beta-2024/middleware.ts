import { NextRequest, NextResponse } from "next/server";
import { fallbackLng, languages } from "@2024/config/i18n/settings";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
	if (
		req.nextUrl.pathname.startsWith("/_next") ||
		req.nextUrl.pathname.includes("/api/") ||
		PUBLIC_FILE.test(req.nextUrl.pathname)
	) {
		return;
	}

	// if (req.nextUrl.locale === "default") {
	// 	const locale = req.cookies.get("NEXT_LOCALE")?.value || "en";

	// 	return NextResponse.redirect(
	// 		new URL(
	// 			`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`,
	// 			req.url,
	// 		),
	// 	);
	// }

	const pathname = req.nextUrl.pathname;

	// Check if the pathname is root or starts with one of our configured languages
	if (
		pathname === "/" ||
		languages.some(lng => pathname.startsWith(`/${lng}`))
	) {
		return;
	}

	// Redirect to fallback language if no language prefix is found
	const newUrl = new URL(`/${fallbackLng}${pathname}`, req.url);

	return NextResponse.redirect(newUrl);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
