import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Home.vue'),
        children:[
            {
                path:'home',
                name:'home',
                component:()=> import('../views/main')
            },
            {
                path:'curry',
                name:'curry',
                component:()=> import ('../views/Curry')
            },
            {
                path:'kobe',
                name:'kobe',
                component:()=> import ('../views/Kobe')
            },
            {
                path:'jordan',
                name:'jordan',
                component:()=> import ('../views/Jordan')
            },
            {
                path:'james',
                name:'James',
                component:()=> import ('../views/James')
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/login/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router