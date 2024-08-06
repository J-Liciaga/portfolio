//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	nx: {
		// Set this to true if you would like to use SVGR
		// See: https://github.com/gregberge/svgr
		svgr: false,
	},
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ["en-US", "es-ES", "ja-JA"],
		// This is the default locale you want to be used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: "en-US",
		// This is a list of locale domains and the default locale they
		// should handle (these are only required when setting up domain routing)
		// Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
		domains: [
			{
				domain: "example.com",
				defaultLocale: "en-US",
			},
			{
				domain: "example.nl",
				defaultLocale: "nl-NL",
			},
			{
				domain: "example.fr",
				defaultLocale: "fr",
				// an optional http field can also be used to test
				// locale domains locally with http instead of https
				http: true,
			},
		],
	},
};

const plugins = [
	// Add more Next.js plugins to this list if needed.
	withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
