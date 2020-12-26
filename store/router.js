/* import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/index.vue';
import store from '../store/index'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('../pages/Account.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('../pages/user.vue')
        },

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router; */