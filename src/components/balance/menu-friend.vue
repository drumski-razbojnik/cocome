<template>
  <aside class="balance__aside">
    <div class="balance__aside__section balance__aside__section--user">
      <!-- <div class="balance__aside__section--user__info">
        <h2 class="balance__aside__section--user__info__title">Lana Franić</h2>
      </div> -->
      <div class="balance__aside__section--user__avatar">
        <img class="balance__aside__section--user__avatar__photo" src="https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/26850023_10156092070106880_3337621856397472840_o.jpg?oh=0cd729191f0a1341b3b595a6598560cc&oe=5B0A6CE9" />
      </div>
    </div>
    <div class="balance__aside__section balance__aside__section--total">
      <div class="balance__aside__section--total__type">
        <p>Ja dugujem</p>
        <p>Ona duguje</p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss">
.balance__aside {
  &__section {
    :not(:first-child) {
      margin-top: 30px;
    }

    &--user {
      padding-bottom: 25px;
      border-bottom: 1px solid #fff;
      
      &__avatar {
        overflow: hidden;

        margin: 0 auto;
        height: 140px;
        width: 140px;

        border: 2px solid #fff;
        border-radius: 50%;

        &__photo {
          height: 100%;
          width: 100%;

          transform: scale(1.05);
          transition: transform 0.25s ease-in-out;

          &:hover {
            transform: scale(1);
          }
        }
      }

      &__info {
        &__title {
          font-size: 1rem;
          text-align: center;
        }
      }
    }
  }
}
</style>

