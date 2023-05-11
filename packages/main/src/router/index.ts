import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: "/", redirect: "/book01", component: () => import("@demo/book01") },
  { path: "/book01", component: () => import("@demo/book01") },
  {
    path: "/interview",
    component: () => import("@demo/interview"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
