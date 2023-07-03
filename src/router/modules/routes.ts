import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "admin",
        name: "admin",
        component: () => import("@/layouts/admin.vue"),
      },
    ],
  },
] as RouteRecordRaw[];
export default routes;
