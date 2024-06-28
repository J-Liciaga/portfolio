const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require("../../tailwind-workspace-preset.js")],
	content: [
		join(__dirname, "../../libs/lucky-ui/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "app/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
		...createGlobPatternsForDependencies(__dirname),
	],
};
