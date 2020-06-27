import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/components/Layout/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "HomeLayout",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue")
      }
    ]
  }
];

const createRouter = () => {
  return new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
};

export default createRouter();
