import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [
		svelte({
			emitCss: false,
		}),
	],

	build: {
		assetsDir: "",
		sourcemap: true,
		lib: {
			entry: "src/bundler.js",
			formats: ["iife"],
			name: "ollesvege",
			fileName: "ollesvege",
		},
	},
});
