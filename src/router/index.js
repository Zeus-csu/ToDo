import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import Header from '@/components/layout/Header'
import AddTodo from '@/components/AddTodo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'AddTodo',
      component: AddTodo
    }
  ]
})
