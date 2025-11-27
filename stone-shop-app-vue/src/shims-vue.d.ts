declare module "*.vue" {
	import type { DefineComponent } from "vue";

	const component: DefineComponent<Record<string, never>, Record<string, never>, any>;
	export default component;
}

declare module "*.svg" {
	const content: string;
	export default content;
}

declare module "*.css" {
	const content: string;
	export default content;
}

declare module "*.sass" {
	const content: string;
	export default content;
}
