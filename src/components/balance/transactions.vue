<template>
   <section class="transactions">
      <transaction-header-row></transaction-header-row>
      <transaction-row v-for="i in 5" :key="i"></transaction-row>
   </section>
</template>

<style lang="scss">

</style>

