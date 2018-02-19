<template>
   <header class="transaction-header">
      <div class="transaction-header__column transaction-header__column--date">
         <h2 class="transaction-header__column__value transaction-header__column--date__value">February 2018.</h2>
      </div>
      <!-- <div class="transaction-header__column transaction-header__column--actions">
         <span class="transaction-header__column__icon transaction-header__column--actions__icon">
            <i class="material-icons">keyboard_arrow_down</i>
         </span>
      </div> -->
   </header>
</template>


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
