import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";


const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/contact",
            name: "Contact",
            component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
        },
        {
            path: "/add-contact",
            name: "AddContact",
            component: () => import(/* webpackChunkName: "add-contact" */ '../views/AddContact.vue'),
        },
        {
            path: "/payment",
            name: "Payment",
            component: () => import(/* webpackChunkName: "payment" */ '../views/Payment.vue'),
        },
        {
            path: "/add-card",
            name: "AddCard",
            component: () => import(/* webpackChunkName: "add-card" */ '../views/AddCard.vue'),
        },
        {
            path: "/add-bank",
            name: "AddBank",
            component: () => import(/* webpackChunkName: "add-bank" */ '../views/AddBank.vue'),
        },
        {
            path: "/done",
            name: "Done",
            component: () => import(/* webpackChunkName: "done" */ '../views/Done.vue'),
        },
    ]
})

export default router;