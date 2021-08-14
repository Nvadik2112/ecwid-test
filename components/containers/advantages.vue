<template>
  <section class="advantages">
    <div v-for="item in list" class="advantages__item">
      <img :src="item.url" :alt="item.alt">
      <div>
        <p v-html="item.text"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "advantages",
  data() {
    return {
      list: [
        {url: '/advantages_logo/sheep_icon.svg', alt: 'sheep', text: 'Только<br>натуральный состав'},
        {url: '/advantages_logo/avi_icon.svg', alt: 'avi', text: 'Актуальное<br>наличие на сайте'},
        {url: '/advantages_logo/delivery_icon.svg', alt: 'delivery', text: 'Быстрая<br>отправка'},
        {url: '/advantages_logo/location_icon.svg', alt: 'location', text: 'Удобное<br>расположение'},
        {url: '/advantages_logo/support_icon.svg', alt: 'support', text: 'Помощь<br>в подборе товаров'}
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.advantages
  max-width: 982px
  width: 100%
  height: 154px
  margin: 70px -36px 70px -39px
  display: flex
  align-items: center
  justify-content: space-between
  &__item
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    height: 145px
    & div
      & p
        font-size: 14px
        line-height: 19px
        color: #497952
        text-align: center

</style>
