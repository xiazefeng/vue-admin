import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob("../layouts/*.vue", { eager: true });
const views = import.meta.glob("../views/**/*.vue", { eager: true });
console.log(views);
function getRoutes() {
  const routes = [] as RouteRecordRaw[];

  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChildrenRoutes(route);
    routes.push(route);
  });
  return routes;
}
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module);
      routes.push(route);
    }
  });
  return routes;
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    path: `/${name}`,
    name: name.replace(/\//g, "."),
    component: module.default,
  } as RouteRecordRaw;
  return Object.assign(route, module.default?.route);
}

export default getRoutes();
