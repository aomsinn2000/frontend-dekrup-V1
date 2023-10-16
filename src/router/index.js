import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../components/LoginView.vue"
import ForgetPassword from '../components/ForgetView.vue'
import Register from '../components/RegisterView.vue'
const routes = [
    {path: "/",component: HomeView},
    {path: "/aboutview" ,component: AboutView},
    {path: "/loginView" ,component: LoginView},
    {path: "/forgetPassword" ,component: ForgetPassword},
    {path: "/register" ,component: Register}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
