<template>
  <div class="transaction-group">
    <transaction-header-row :transactionGroup="transactionGroup"></transaction-header-row>
    <transactions :transactionGroup="transactionGroup"></transactions>
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

