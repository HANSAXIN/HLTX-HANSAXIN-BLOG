const routes = [
  {
    path: "/login",
    name: 'login',
    component: () => import("@/pages/login.vue"), //路由懒加载
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home.vue"),
    children: [
      {
        path: "/home/user",
        name: "homeUser",
        component: () => import("@/pages/user.vue"),
      },
      {
        path: "/home/manage",
        name: "homeManage",
        component: () => import("@/pages/manage.vue"),
      },
    ],
  },
  //添加（放在最后）
  {
    path: "/:pathMatch(.*)*",
    name: "pathMatch",
    component: () => import("@/pages/notFound.vue"),
  },
];

export default routes;
