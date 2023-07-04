import _ from "lodash-es";
export function parseEnv(env: Record<string, any>):ViteEnv {
  const newEnv:any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === "true" || value === "false") {
      newEnv[key] = value === "true";
    } else if (value === "null") {
      newEnv[key] = null;
    } else if (!isNaN(Number(value))) {
      newEnv[key] = Number(value);
    }
  });
  return newEnv;
}
