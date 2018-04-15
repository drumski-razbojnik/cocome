<template>
  <div class="transaction" :class="{ 'transaction--expanded': isExpanded }">
    <div class="transaction__overview">
      <div class="transaction__overview__column transaction__overview__column--date">
        {{localDate}}
      </div>
      <div class="transaction__overview__column transaction__overview__column--title">
        {{transaction.description}}
      </div>
      <div class="transaction__overview__column transaction__overview__column--amount">
        <span class="transaction__overview__column__value transaction__overview__column--amount__value">
          {{ transaction.totalCost.toFixed(2) }}€
        </span>
      </div>
      <div class="transaction__overview__column transaction__overview__column--difference">
        <span v-if="(isCurrentUserPayee && !transactionSettled && transactionBalance > 0)" class="transaction__overview__column__value 
          transaction__overview__column--difference__value 
          transaction__overview__column--difference__value--creditor">
          {{ transactionBalance.toFixed(2) }}€
        </span>

        <span v-else-if="(!isCurrentUserPayee && !transactionSettled&& transactionBalance > 0)" class="transaction__overview__column__value 
        transaction__overview__column--difference__value
        transaction__overview__column--difference__value--debtor">
          {{ transactionBalance.toFixed(2) }}€
        </span>

        <span v-else class="transaction__overview__column__value 
        transaction__overview__column--difference__value">
          {{ transaction.totalCost }}€
        </span>
      </div>
    </div>

    <div class="transaction__details">

      <transaction-row-details v-for="ts in transaction.settlements" :key="ts.debtor" :settlement="ts"></transaction-row-details>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    isExpanded: {
      type: Boolean,
      required: false,
      default: true
    },
    transaction: {
      required: true
    }
  },
  data() {
    return {
      localDate: this.transaction.date.toLocaleDateString("hr-HR")
    };
  },
  computed: {
    isCurrentUserPayee() {
      if (this.$store.state.currentUser === this.transaction.payee) {
        return true;
      }
      return false;
    },
    transactionBalance() {
      if (this.isCurrentUserPayee) {
        return this.$store.getters["transactions/transactionBalanceTotalDebt"](
          this.transaction.id
        );
      } else {
        return this.$store.getters["transactions/transactionBalanceUserDebt"]({
          idTransaction: this.transaction.id,
          debtor: this.$store.state.currentUser
        });
      }
    },
    transactionSettled() {
      return this.$store.getters["transactions/transactionSettled"](
        this.transaction.id
      );
    }
  }
};
</script>


<style lang="scss">
.transaction {
  height: 0;
  margin-top: -1px;
  padding: 10px 15px;
  position: relative;

  background-color: #fdfffc;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  color: #444;

  &:hover {
    cursor: pointer;
  }

  &--expanded {
    height: auto;
  }

  &:nth-child(2n + 1) {
    background-color: #f7f4f3;
  }

  &__details {
  }

  &__overview {
    display: flex;
    flex-direction: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;

    padding-bottom: 10px;

    &__column {
      font-size: 0.8rem;
      align-items: center;
      position: relative;

      // margin: 0 10px;
      padding: 0 15px;

      &--date {
        flex-basis: 10%;
      }

      &--title {
        flex-grow: 3;
      }

      &--amount {
        flex-basis: 10%;

        text-align: center;

        &__value {
          font-weight: bold;
        }
      }

      &--difference {
        flex-basis: 10%;
        text-align: center;

        &__value {
          font-weight: bold;
          &--creditor {
            color: #04724d;
          }

          &--debtor {
            color: #e65f5c;
          }
        }
      }
    }
  }
}
</style>
