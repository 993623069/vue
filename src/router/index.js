import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index';
import SingOut from '@/views/singOut';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})

export default router