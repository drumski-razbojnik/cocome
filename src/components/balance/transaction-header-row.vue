<template>
  <header class="transaction-header">
    <div class="transaction-header__column transaction-header__column--date">
      <h2 class="transaction-header__column__value transaction-header__column--date__value">
        {{transactionGroup.name}}
      </h2>
    </div>
    <div class="transaction-header__column transaction-header__column--actions">
      <span class="transaction-header__column__icon transaction-header__column--actions__icon" @click="toggleGroupVisibility">
        <i class="material-icons" v-if="transactionGroup.expanded">keyboard_arrow_down</i>
        <i class="material-icons" v-else>keyboard_arrow_up</i>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    transactionGroup: {
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    toggleGroupVisibility() {
      this.$store.dispatch(
        "transactions/toggleTransactionGroup",
        this.transactionGroup.id
      );
    }
  }
};
</script>


<style lang="scss">
.transaction-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  background-color: #bccccf;
  color: #fff;

  padding: 10px 15px;

  &__column {
    &--date {
      flex-basis: 90%;

      &__value {
        font-size: 1rem;
        margin: 0;
      }
    }
    &--actions {
      flex-basis: 10%;

      &__icon {
      }
    }
  }
}
</style>
