
interface ViteEnv{
    VITE_SOME_KEY:number
    VITE_ROUTE_AUTOLOAD:boolean
    VITE_API_URL:string
}
interface ImportMetaEnv extends ViteEnv {
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
  }
  
interface ImportMeta {
readonly env: ImportMetaEnv
}

declare module "*.vue" {
    import type { DefineComponent } from "vue";
  
    const vueComponent: DefineComponent<{}, {}, any>;
  
    export default vueComponent;
}
  