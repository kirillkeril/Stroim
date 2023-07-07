import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {useAuthStore} from "@/store/authStore.ts";

export enum RouterNames {
    HOME = 'home',
    PROFILE = 'profile',
    NEWS = 'news',
    MARKET = 'market',
    AUTH = 'auth',
    NOT_FOUND = 'notFound',
}

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name: RouterNames.HOME,
        component: () => import('@/pages/HomePage.vue'),
    },
    {
        path:"/auth",
        name: RouterNames.AUTH,
        component: () => import('@/pages/AuthPage.vue'),
        meta: {
            layout: 'BlankLayout'
        }
    },
    {
        path:"/news",
        name: RouterNames.NEWS,
        component: () => import('@/pages/NewsPage.vue'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path:"/market",
        name: RouterNames.MARKET,
        component: () => import('@/pages/ProductsPage.vue'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path:"/profile",
        name: RouterNames.PROFILE,
        component: () => import('@/pages/ProfilePage.vue'),
        meta: {
            requireAuth: true,
        }
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
router.beforeEach((to, from) => {
    const authStore = useAuthStore();
    if(to.meta.requireAuth && !authStore.isLoggedIn) {
        return {
            name: RouterNames.NOT_FOUND,
        }
    }
})
