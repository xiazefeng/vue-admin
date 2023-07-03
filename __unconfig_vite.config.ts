
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./vite/alias";
import { parseEnv } from "./vite/utils";
import setupPlugins from "./vite/plugins";
// https://vitejs.dev/config/
// const __unconfig_default =  defineConfig({
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

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;