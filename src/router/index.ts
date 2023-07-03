import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./modules/routes.ts";
import layoutsRoutes from "./autoload.ts";
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutsRoutes],
});
export function setupRouter(app: App) {
  app.use(router);
}
export default router;
