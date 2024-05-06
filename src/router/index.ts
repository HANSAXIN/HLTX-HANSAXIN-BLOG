import { createRouter, createWebHistory } from "vue-router";
import blog from "./modules/blog";

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes: [...blog]
});

export default router;
