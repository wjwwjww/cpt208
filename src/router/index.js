import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/users/Home/HomePage.vue'
import welcom from '@/users/Welcom/WelcomPage.vue'
import statics from '@/users/static/StaticPage.vue'
import discovers from '@/users/discover/DiscoverPage.vue'
import account from '@/users/account/accountPage.vue'

const routes = [
    { path: '/home', component: home },
    {path: '/welcom', component: welcom},
    {path:'/static',component: statics},
    {path: '/discover',component: discovers},
    {path: '/account',component: account}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router