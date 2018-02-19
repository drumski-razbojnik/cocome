<template>
  <header class="header">
    <div class="header__section header__section--brand">Cocome</div>
    <div class="header__section header__section--middle"></div>
    <div class="header__section header__section--right"></div>
  </header>
</template>

<style lang="scss" scoped>
@import "static/variables";

.header {
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;

  padding:10px 40px;

  background-color: #96C0B7;


  &__section {
    &--brand {
      color:#fff;
      font-size:2rem;
      font-family: $fontLogo;

      flex-basis:20%;
    }

    &--middle {
      flex-basis:60%;
    }

    &--right {
      flex-basis:20%;
    }
  }
}
</style>

