<template>
  <div class="transaction-group">
    <transaction-header-row :transactionGroup="transactionGroup"></transaction-header-row>
    <div v-if="transactionGroup.expanded">
      <transaction-row v-for="transaction in transactionGroup.transactions" :key="transaction.id" :transaction="transaction"></transaction-row>
    </div>

  </div>
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
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.transaction-group {
  border-bottom: 1px solid rgb(133, 133, 133);
}
</style>

