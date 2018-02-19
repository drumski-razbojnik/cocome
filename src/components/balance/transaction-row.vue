<template>
  <div class="transaction" :class="{
                    'transaction--odd' : true
                    }">
    <div class="transaction__column transaction__column--date">
      23.2.
    </div>
    <div class="transaction__column transaction__column--title">
      3 x Zeolit (Amazon)
    </div>
    <div class="transaction__column transaction__column--amount">
      <span class="transaction__column__value transaction__column--amount__value">
        {{ (Math.random() * Math.random() * 100).toFixed(2)}}€
      </span>
    </div>
    <div class="transaction__column transaction__column--difference">
      <span class="transaction__column__value transaction__column--difference__value transaction__column--difference__value--debtor">
        -{{ (Math.random() * Math.random() * 100).toFixed(2)}}€
      </span>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.transaction {
  display: flex;
  flex-direction: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;

  margin-top: -1px;
  padding: 10px 10px;
  position: relative;

  background-color: #fdfffc;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  color: #444;

  &:hover {
    cursor: pointer;
  }

  &--odd {
    background-color: #f7f4f3;

    &:hover {
    }
  }

  &__column {
    font-size: 0.8rem;
    align-items: center;
    position: relative;

    margin: 0 10px;

    &--date {
      flex-basis: 10%;
    }

    &--title {
      flex-grow: 3;
    }

    &--amount {
      flex-basis: 10%;

      text-align: center;

      &__value {
        font-weight: bold;
      }
    }

    &--difference {
      flex-basis: 10%;
      text-align: center;

      &__value {
        font-weight: bold;
        &--creditor {
          color: #04724d;
        }

        &--debtor {
          color: #e65f5c;
        }
      }
    }
  }
}
</style>
