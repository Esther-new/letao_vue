import Vue from "vue";
import VueRouter from "vue-router";

// 本质Vue.prototype.$router = VueRouter(相当于加载到原型去)
Vue.use(VueRouter);
import home from "@/components/home.vue";
import cart from "@/components/cart.vue";
import user from "@/components/user.vue";
import newslist from "@/components/news/newslist.vue";
// 实例化路由对象，写路由匹配规则
const router = new VueRouter({
    routes: [
        { path: "/", component: home },
        { path: "/home", component: home },
        { path: "/cart", component: cart },
        { path: "/user/:user_id", component: user },
        { path: "/newslist", component: newslist }
    ]

})
// 暴露路由对象
export default router;