<template>
  <aside class="balance__aside">
    <nav class="balance__aside__nav">
      <h2 class="balance__aside__nav__title">Stakeholders</h2>
      <ul class="balance__aside__nav__menu">
        <li class="balance__aside__nav__menu__item" v-for="stakeholder in stakeholders" :key="stakeholder">
          <a class="balance__aside__nav__menu__item__link" href="#" @click="displayStakeholderBalance(stakeholder)">{{stakeholder}}</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    stakeholders() {
      return this.$store.getters["transactions/stakeholders"];
    }
  },
  methods: {
    displayStakeholderBalance(stakeholder) {
      var filter = {
        type: "user",
        order: "asc",
        searchParameter: stakeholder
      };

      this.$store.dispatch("transactions/setTransactionGroups", filter);
    }
  }
};
</script>

<style lang="scss">
.balance__aside {
  &__nav {
    &:not(:first-child) {
      margin-top: 30px;
    }

    &__title {
      font-size: 1rem;
      font-weight: 600;

      margin: 0;
      padding: 0 0 10px 0;
    }

    &__subtitle {
      font-size: 0.9rem;
      font-weight: 300;

      margin: 0;
      padding: 0 0 10px 0;
    }

    &__menu {
      margin: 0;
      padding: 0;

      list-style-type: none;
      &__item {
        background-color: #fff;
        border-radius: 2.5px;

        margin: 5px 0;
        padding: 0;

        &__link {
          display: block;
          padding: 5px 10px;

          color: #333;
          font-size: 0.85rem;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

