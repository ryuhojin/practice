function getMenuTree(menuItems: any[], parentId = null) {
  const result = [];

  for (const menuItem of menuItems.filter((m) => m.parentId === parentId)) {
    const children = getMenuTree(menuItems, menuItem.id);

    if (children.length) {
      menuItem.children = children;
    }

    result.push(menuItem);
  }

  return result;
}

// function addRoutesFromMenu(menuItems, router, parentRoute = null) {
//   for (const menuItem of menuItems.filter(m => m.parentId === parentRoute?.meta?.id)) {
//     const route = {
//       path: menuItem.path,
//       name: menuItem.name,
//       meta: { id: menuItem.id },
//       component: () => import(`@/views/${menuItem.path}.vue`)
//     };

//     if (parentRoute) {
//       parentRoute.children.push(route);
//     } else {
//       router.addRoute(route);
//     }

//     addRoutesFromMenu(menuItems, router, route);
//   }
// }

// const menuTree = getMenuTree(menuItems);
// const router = createRouter({
//   routes: [
//     { path: '/', name: 'Home', component: () => import('@/views/Home.vue') }
//   ]
// });

// addRoutesFromMenu(menuTree, router);

export const setRoutes = async (routeItems: any) => {
  return new Promise((resolve, reject) => {
    const tree = getMenuTree(routeItems);
    try {
      resolve(true);
    } catch {
      reject("Router Add Failed");
    }
  });
};
