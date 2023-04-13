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

const generateTree = (
  menus: any[],
  parentId: number,
  processedIds: Set<number> = new Set()
) => {
  const result: any = [];
  for (let menu of menus) {
    if (menu.parentId === parentId && !processedIds.has(menu.id)) {
      processedIds.add(menu.id);
      const children = generateTree(menus, menu.id, processedIds);
      if (children.length > 0) {
        menu.children = children;
      }
      result.push(menu);
    }
  }
  return result;
};

const addRoutes = async (routeItems: any) => {
  return new Promise((resolve, reject) => {
    const tree = generateTree(routeItems, 1);
    console.log(tree);
    debugger;
    try {
      tree.forEach((value: any) => {
        //root
        // if (value.parentId == value.id) {
        //   router.addRoute(value);
        // } else {
        //   router.addRoute(value);
        // }
      });
      resolve(true);
    } catch {
      reject("Router Add Failed");
    }
  });
};

export { router, addRoutes };
