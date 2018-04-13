export default {
   namespaced: true,
   state: {
      transactions: [],
      transactionGroups: [],
      lastUpdate: null,
   },
   getters: {
      transactionsByMonth: (state) => {
         //Finding the minimum and maximum year
         var years = state.transactions.map(t => {
            return t.date.getFullYear();
         });
         var minYear = Math.min(...years);
         var maxYear = Math.max(...years);

         //Creating the month groups
         var monthGroups = [];

         for (let y = minYear; y <= maxYear; y++) {
            for (let m = 1; m <= 12; m++) {

               //Setting the first and the last day of the month
               const monthStartDate = new Date(y, m - 1, 1);
               const monthEndDate = new Date(y, m, 0);

               //Grouping existing transactions to months
               var monthTransactions = state.transactions.filter(t => {
                  if (t.date >= monthStartDate && t.date <= monthEndDate) {
                     return t;
                  }
               });

               //Add group only if there are transactions within that month
               if (monthTransactions.length > 0) {
                  var monthGroup = {
                     id: parseInt(y.toString() + m.toString()),
                     name: m + '. mjesec ' + y,
                     expanded: true,
                     transactions: monthTransactions
                  };
                  monthGroups.push(monthGroup);

                  //Sorting the array by date descending
                  console.log(monthGroups)
                  monthGroups.sort((a, b) => a - b);
               }
            }
         }

         return monthGroups;
      },
      transactionsByUser: (state, getters) => (username) => {
         var filteredTransactions = getters.transactionsByMonth.filter(transactionGroup => {

            let transactions = transactionGroup.transactions.map(transaction => {
               let settlements = transaction.settlements.map(settlement => {
                  if (settlement.debtor === username) {
                     return settlement;
                  }
               }).filter(settlement => settlement !== undefined);

               if ((settlements.length > 0) || (transaction.payee === username)) {
                  return transaction;
               }

            }).filter(transaction => transaction !== undefined);

            return (transactions.length > 0);
         });

         return filteredTransactions;
      },
      transactionSettled: (state, getters) => (idTransaction) => {
         if (getters.transactionBalanceTotalDebt(idTransaction) > 0) {
            return false;
         }

         return true;
      },
      transactionBalanceTotalDebt: (state) => (idTransaction) => {
         let transactionBalance = 0;

         let transaction = state.transactions.find(transaction => transaction.id == idTransaction);
         let totalSettlementsBalance = transaction.settlements
            .map(settlement => settlement.paid)
            .reduce((prev, curr) => {
               return prev + curr;
            });

         return (transaction.totalCost - totalSettlementsBalance);
      },
      transactionBalanceUserDebt: (state) => (transactionInfo) => {
         let transaction = state.transactions.find(transaction => transaction.id == transactionInfo.idTransaction);
         let debtorBalance = transaction.settlements
            .filter(settlement => settlement.debtor == transactionInfo.debtor)
            .map(settlement => {
               return settlement.cost - settlement.paid;
            })
            .reduce((prev, curr) => prev + curr, 0);

         return debtorBalance;
      },
      stakeholders: (state, getters) => {
         var transactionGroups = getters.transactionsByMonth;
         var usersStakeholders = [];

         transactionGroups.forEach(transactionGroup => {
            transactionGroup.transactions.forEach(transaction => {
               let transactionStakeholders = transaction.settlements.map(settlement => settlement.debtor);
               transactionStakeholders.push(transaction.payee);

               usersStakeholders = usersStakeholders.concat(transactionStakeholders);

            });
         });

         //Filtering all unique values
         usersStakeholders = usersStakeholders.filter((stakeholder, index, self) => self.indexOf(stakeholder) === index);

         return usersStakeholders;
      }
   },
   mutations: {
      GET_TRANSACTIONS(state, transactions) {
         state.lastUpdate = new Date();
         state.transactions = [{
            id: 1,
            payee: 'lana.franic',
            date: new Date('2018-02-22'),
            description: 'Podloga za pečenje',
            totalCost: 59.55,
            currency: 'EUR',
            settlements: [{
               debtor: 'hrvoje.fadiga',
               cost: 19.85,
               paid: 14
            },
            {
               debtor: 'igor.fadiga',
               cost: 19.85,
               paid: 13
            },
            {
               debtor: 'tin.fadiga',
               cost: 19.85,
               paid: 19.85
            }]
         },
         {
            id: 2,
            payee: 'hrvoje.fadiga',
            date: new Date('2018-01-29'),
            description: 'Stekovi',
            totalCost: 500,
            currency: 'HRK',
            settlements: [{
               debtor: 'roberta.fadiga',
               cost: 250,
               paid: 0
            }, {
               debtor: 'igor.fadiga',
               cost: 250,
               paid: 35
            }]
         },
         {
            id: 3,
            payee: 'tin.fadiga',
            date: new Date('2018-03-01'),
            description: '3 x Zeolit (Amazon)',
            totalCost: 150.4,
            currency: 'EUR',
            settlements: [{
               debtor: 'tin.fadiga',
               cost: 250,
               paid: 0
            }, {
               debtor: 'igor.fadiga',
               cost: 250,
               paid: 0
            }]
         },
         {
            id: 4,
            payee: 'roberta.fadiga',
            date: new Date('2017-01-07'),
            description: 'Pivkani',
            totalCost: 139.40,
            currency: 'HRK',
            settlements: [{
               debtor: 'hrvoje.fadiga',
               cost: 68.73,
               paid: 14.7
            }, {
               debtor: 'igor.fadiga',
               cost: 68.73,
               paid: 13
            }]
         },
         {
            id: 5,
            payee: 'hrvoje.fadiga',
            date: new Date('2018-03-20'),
            description: 'Hlače (online)',
            totalCost: 150.40,
            currency: 'EUR',
            settlements: [{
               debtor: 'igor.fadiga',
               cost: 150.40,
               paid: 0
            }]
         },
         {
            id: 6,
            payee: 'hrvoje.fadiga',
            date: new Date('2018-03-27'),
            description: 'Podloga za miša',
            totalCost: 11.99,
            currency: 'EUR',
            settlements: [{
               debtor: 'tin.fadiga',
               cost: 11.99,
               paid: 0
            }]
         }
         ];
      },
      TOGGLE_TRANSACTIONGROUP(state, id) {
         var transactionGroup = state.transactionGroups.find(tg => tg.id == id);
         transactionGroup.expanded = !transactionGroup.expanded;
      },
      SET_TRANSACTION_GROUPS(state, selectedTransactionGroups) {
         state.transactionGroups = selectedTransactionGroups;
      }
   },
   actions: {
      getTransactions(context) {
         //Transactions will be fetched here

         context.commit('GET_TRANSACTIONS');
         context.commit('SET_TRANSACTION_GROUPS', context.getters.transactionsByMonth)
      },
      setTransactionGroups: (context, filter) => {
         let selectedTransactionGroups = [];

         if (filter.type === 'user') {
            selectedTransactionGroups = context.getters.transactionsByUser(filter.searchParameter);
         }
         else {
            selectedTransactionGroups = context.getters.transactionsByMonth;
         }

         context.commit('SET_TRANSACTION_GROUPS', selectedTransactionGroups);
      },
      toggleTransactionGroup: (context, id) => {
         context.commit('TOGGLE_TRANSACTIONGROUP', id);
      },
      getTransactionBalance: (context, idTransaction) => {
         let transaction = context.state.transactions.find(t => t.id == idTransaction);
         let totalSettlementsBalance = transaction.settlements
            .map(settlement => settlement.paid)
            .reduce((prev, curr) => {
               return prev + curr;
            });

         return (transaction.totalCost - totalSettlementsBalance);
      },
   }
}

