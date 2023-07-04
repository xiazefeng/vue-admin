import { ConfigEnv, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./vite/alias";
import { parseEnv } from "./vite/utils";
import setupPlugins from "./vite/plugins";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   },
// });

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    // plugins: [vue()],
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
  };
};
