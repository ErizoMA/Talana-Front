import { createRouter, createWebHistory } from "vue-router";
import Category from "../views/Category.vue";

const routes = [
  {
    path: "/category/:name",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/",
    redirect: "/category/Alimentos",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
