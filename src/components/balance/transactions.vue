<template>
  <section class="transactions" :class="{ 'transactions--closed':!transactionGroup.expanded}">
    <transaction-row v-for="t in transactionGroup.transactions" :key="t.id" :transaction="t"></transaction-row>
  </section>
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
  created() {
  }
};
</script>


<style lang="scss">
.transactions {
  overflow: hidden;
  transition: height ease-in-out 0.2s;
  &--closed {
    height: 0;
  }
}
</style>

