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

const addRoutes = async () => {
  return new Promise((resolve, reject) => {});
};

export const setRoutes = async (routeItems: any) => {
  return new Promise((resolve, reject) => {
    const tree = generateTree(routeItems, 1)[0].children;
    try {
      tree.forEach((value: any) => {});
      resolve(true);
    } catch {
      reject("Router Add Failed");
    }
  });
};
