import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

export enum RouterNames {
    NOT_FOUND = 'notFound'
}

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name: "home",
        component: () => import('@/pages/HomePage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: RouterNames.NOT_FOUND,
        component: () => import('@/pages/ErrorPage.vue'),
    }
];
export const router = createRouter({
    history: createWebHistory(),
    routes
});
