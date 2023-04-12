import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

const addRoutes = async (routeItems: any) => {
  return new Promise((resolve, reject) => {
    try {
      routeItems.forEach((value: RouteRecordRaw) => {
        router.addRoute(value);
      });
      resolve(true);
    } catch {
      reject("Router Add Failed");
    }
  });
};

export { router, addRoutes };
