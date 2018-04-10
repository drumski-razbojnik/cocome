<template>
   <div class="transaction__details__row">
      <div class="transaction__details__row__column transaction__details__row__column--debtor">
         {{settlement.debtor}}
      </div>
      <div class="transaction__details__row__column transaction__details__row__column--amount">
         {{settlement.cost}} €
      </div>
      <div class="transaction__details__row__column transaction__details__row__column--amount">
         {{settlement.paid}} €
      </div>
   </div>
</template>

<script>
export default {
  props: {
    settlement: {
      required: true
    }
  }
};
</script>

<style lang="scss">
.transaction {
  &__details {
    position: relative;
    &__row {
      display: flex;
      flex-direction: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;

      padding-top: 10px;

      &__column {
        &--debtor {
          flex-basis: 90%;
          text-align: right;
        }
        &--amount {
          flex-basis: 10%;
          text-align: center;
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;

      height: 1px;
      width: 100%;

      background-image: repeating-linear-gradient(
        90deg,
        #cecece,
        #cecece 5px,
        transparent,
        transparent 10px
      );
    }
  }
}
</style>


