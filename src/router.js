import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'


import Balance from './components/Balance';

Vue.use(Router);

const routes = [
   {
      path: '/',
      name: 'balance',
      component: Balance,
      meta: {

      }
   }];

export default router;