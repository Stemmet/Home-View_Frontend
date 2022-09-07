import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: function () {
      return import('../views/Blogs.vue')
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: function () {
      return import('../views/Contact.vue')
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: function () {
      return import('../views/Profile.vue')
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: function () {
      return import('../views/Register.vue')
    }
  },
  {
    path: '/SingleBlog',
    name: 'Single',
    component: function () {
      return import('../views/SingleBlog.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
