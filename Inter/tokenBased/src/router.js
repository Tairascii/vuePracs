import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true}
    },
    {
        path: '/register',
        name: 'Register',
        component: Register

    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
      return { top: 0 }
    },
  })

router.beforeEach((to, from ,next) => {
    const loggedIn = localStorage.getItem('user')

    if(to.matched.some(record => record.meta.requiresAuth && !loggedIn)){
        next('/')
    }
    next()
    
})

export default router