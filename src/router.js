import Vue from 'vue'
import VueRouter from 'vue-router'

import Hot from '@/view/hot'
import Movie from '@/view/movie'
import Top from '@/view/top'
import Detail from '@/view/detail'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/hot'
    }, {
        path: '/hot',
        component: Hot
    }, {
        path: '/movie',
        component: Movie
    }, {
        path: '/top',
        component: Top
    }, {
        path: '/detail/:id',
        component: Detail
    }]
})
export default router