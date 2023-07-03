import { App } from "vue";
import { setupTailwind } from "./tailwindcss";

export function setupPlugins(app: App) {
  setupTailwind();
}
