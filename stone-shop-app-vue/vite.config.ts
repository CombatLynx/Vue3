import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		base: env.VITE_APP_BASE_URL,
		plugins: [
			vue({
				template: {},
			}),
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @import "@/app/assets/styles/transitions.scss";
          `,
				},
			},
		},
		server: {
			port: 4200,
		},
	};
});
