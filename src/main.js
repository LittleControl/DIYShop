import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './filters/index'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/img/error.gif',
    loading: '/img/loading.gif',
    attempt: 1
})

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
