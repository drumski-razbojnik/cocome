<template>
   <aside class="balance__aside">
      <nav class="balance__aside__nav">
         <h2 class="balance__aside__nav__title">Obitelj</h2>
         <ul class="balance__aside__nav__menu">
            <li class="balance__aside__nav__menu__item">
               <a class="balance__aside__nav__menu__item__link" href="#">Robi</a>
            </li>
            <li class="balance__aside__nav__menu__item">
               <a class="balance__aside__nav__menu__item__link" href="#">Tin</a>
            </li>
            <li class="balance__aside__nav__menu__item">
               <a class="balance__aside__nav__menu__item__link" href="#">Mama</a>
            </li>
            <li class="balance__aside__nav__menu__item">
               <a class="balance__aside__nav__menu__item__link" href="#">Tata</a>
            </li>
         </ul>
      </nav>

      <nav class="balance__aside__nav">
         <h2 class="balance__aside__nav__title">Prijatelji</h2>
         <ul class="balance__aside__nav__menu">
            <li class="balance__aside__nav__menu__item">
               <a class="balance__aside__nav__menu__item__link" href="#">Rick</a>
            </li>
            <li class="balance__aside__nav__menu__item">
               <a class="balance__aside__nav__menu__item__link" href="#">Patrick</a>
            </li>
         </ul>
      </nav>

      <nav class="balance__aside__nav">
         <h2 class="balance__aside__nav__title">Cigani</h2>
         <ul class="balance__aside__nav__menu">
            <li class="balance__aside__nav__menu__item">
               <a class="balance__aside__nav__menu__item__link" href="#">Hamdija I.</a>
            </li>
         </ul>
      </nav>
   </aside>
</template>

<script>
export default {};
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

