import Vue from "vue";
import VueRouter from "vue-router";
import Hello from "../views/Hello.vue";
import Table from "../views/Table.vue";
import Parallax from "../views/Parallax.vue";
import Pedido from "../views/Pedido.vue";
import Water from "../views/Water";
import Pedido2 from "../views/Pedido2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/hello",
    name: "hello",
    component: Hello,
  },
  {
    path: "/table",
    name: "table",
    component: Table,
  },
  {
    path: "/parallax",
    name: "parallax",
    component: Parallax,
  },
  {
    path: "/pedido",
    name: "pedido",
    component: Pedido,
  },
  {
    path: "/water",
    name: "water",
    component: Water,
  },
  {
    path: "/",
    name: "pedido2",
    component: Pedido2,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
