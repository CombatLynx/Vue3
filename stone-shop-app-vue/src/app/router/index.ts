import type { Router, RouteRecordRaw } from "vue-router";

import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: () => import("@/pages/HomePage.vue"),
		redirect: { name: "products" },
		children: [
			{
				path: "products/:date?",
				name: "products",
				component: () => import("@/pages/ProductsPage.vue"),
				props: true,
			},
			{
				path: "posts/:date?",
				name: "posts",
				component: () => import("@/pages/PostsPage.vue"),
				props: true,
			},
		],
	},
	{
		path: "/error",
		name: "error",
		children: [
			{
				path: "403",
				name: "access-denied",
				component: () => import("@/pages/AccessDeniedPage.vue"),
			},
			{
				path: "404",
				name: "page-not-found",
				component: () => import("@/pages/NotFoundPage.vue"),
			},
		],
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: { name: "page-not-found" },
	},
];

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
	routes,
});

export default router;
