import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores/main'

//Components
import topMenu from './components/shared/top-menu'

import transactions from './components/balance/transactions'
import transactionGroup from './components/balance/transaction-group'
import transactionRow from './components/balance/transaction-row'
import transactionRowDetails from './components/balance/transaction-row-details'
import transactionHeaderRow from './components/balance/transaction-header-row'


Vue.component('top-menu', topMenu)

Vue.component('transactions', transactions)
Vue.component('transaction-group', transactionGroup)
Vue.component('transaction-row', transactionRow)
Vue.component('transaction-row-details', transactionRowDetails)
Vue.component('transaction-header-row', transactionHeaderRow)



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
