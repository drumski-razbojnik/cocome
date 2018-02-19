<template>
  <main class="page balance">
    <friends-menu></friends-menu>

    <article class="balance__transactions">
      <transactions></transactions>
    </article>

    <friend-menu></friend-menu>
  </main>
</template>

<script>
import friendMenu from "./balance/menu-friend";
import friendsMenu from "./balance/menu-friends";

export default {
  computed: {},
  components: {
    "friends-menu": friendsMenu,
    "friend-menu": friendMenu
  }
};
</script>

<style lang="scss">
.balance {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  min-height: 100vh;

  &__transactions {
    background-color: #fff;
    flex-basis: 60%;
  }

  &__aside {
    flex-basis: 20%;

    padding: 50px 25px;

    background-color: #011627;
    color: #fff;
  }
}
</style>

