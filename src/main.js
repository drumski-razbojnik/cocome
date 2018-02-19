import Vue from 'vue'
import App from './App'
import router from './router'

//Components
import topMenu from './components/shared/top-menu'

import transactions from './components/balance/transactions'
import transactionRow from './components/balance/transaction-row'
import transactionHeaderRow from './components/balance/transaction-header-row'

Vue.component('top-menu', topMenu)

Vue.component('transactions', transactions)
Vue.component('transaction-row', transactionRow)
Vue.component('transaction-header-row', transactionHeaderRow)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
