import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from "vue-router";

const SetupPage = () => import("@/pages/SetupPage.vue");

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/setup",
    },
    {
        path: "/setup",
        name: "SetupPage",
        component: SetupPage,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
