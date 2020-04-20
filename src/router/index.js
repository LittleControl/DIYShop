import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile.vue'
import Shop from '../pages/Shop.vue'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/shop',
            component: Shop,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
