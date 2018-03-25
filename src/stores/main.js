import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import transactions from './transactions'

Vue.use(Vuex);
const store = new Vuex.Store({
   state: {
      currentUser:'hrvoje.fadiga'
   },
   modules: {
      transactions: transactions
   }
});

export default store