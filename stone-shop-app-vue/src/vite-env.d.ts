interface ImportMetaEnv {
	MODE: string;
	VITE_APP_API_URI: string;
	VITE_APP_API_VERSION: string;
	VITE_APP_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
