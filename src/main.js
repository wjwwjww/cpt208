import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";

// import { createRouter, createWebHashHistory } from 'vue-router'
// import home from '@/users/Home/HomePage.vue'
// import welcom from '@/users/Welcom/WelcomPage.vue'
// import statics from '@/users/static/StaticPage.vue'
// import discovers from '@/users/discover/DiscoverPage.vue'
//
// const routes = [
//     { path: '/home', component: home },
//     {path: '/welcom', component: welcom},
//     {path:'/static',component: statics},
//     {path: '/discover',component: discovers}
//
// ]
//
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes
// })

const app = createApp(App)
app.use(router)
app.mount('#app')
