import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import { useStore } from "../store";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/query", component: () => import("../components/Query.vue") },
  {
    name: "params",
    path: "/params:id",
    component: () => import("../components/Params.vue"),
  },
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

router.beforeEach(async (to, from, next) => {
  const store = useStore();
  await store.getNavigation().catch((e: Error) => {
    console.error(e.message);
    next(e);
    return;
  });
  const navigations = store.$state.navigations;
  // 添加动态路由
  navigations.forEach((nav) => {
    router.addRoute({
      name: nav.name,
      path: nav.path,
      component: () => import(`@demo/${nav.component}`),
    });
  });
  next();
});

export default router;
