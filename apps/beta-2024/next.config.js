//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/en",
				permanent: true,
			},
		];
	},
	nx: {
		svgr: true,
	},
	images: {
		domains: ["api.microlink.io", "aceternity.com"],
	},
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
