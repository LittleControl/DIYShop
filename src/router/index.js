import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile.vue'
import Shop from '../pages/Shop.vue'
import Login from '../pages/Login.vue'
import ShopInfo from '../pages/ShopInfo/ShopInfo.vue'
import Abort from '../pages/ShopInfo/Abort.vue'
import Evaluation from '../pages/ShopInfo/Evaluation.vue'
import Good from '../pages/ShopInfo/Good.vue'

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
            },

        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/shopinfo',
            component: ShopInfo,
            children: [
                {
                    path: 'good',
                    component: Good
                },
                {
                    path: 'evaluation',
                    component: Evaluation,
                },
                {
                    path: 'abort',
                    component: Abort
                },
                {
                    path: '',
                    redirect: 'good'
                }
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }

    ]
})
