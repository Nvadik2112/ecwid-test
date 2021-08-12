<template>
  <div class="header-frame">
    <div class="logo">
      <img src="/logo_header_2 1.svg" alt="Логотип">
    </div>
    <div v-for="item in groups" class="contact">
      <img :src="item.icon" :alt="item.alt">
      <div :id="item.id" v-if="item.upperText && item.downText">
        <p v-html="item.upperText"></p>
        <p v-html="item.downText"></p>
      </div>
    </div>
    <div class="menu-button">
      <img src="/icon-basket.svg" alt="меню">
    </div>
  </div>
</template>

<script>
export default {
  name: "header.vue",
  data() {
    return {
      groups: [
        {icon:'/icon-map.svg', upperText: 'м. Кропоткинская', downText: 'Соймоновский проезд, д.7 с.1', alt: 'карта'},
        {icon:'/icon-time.svg', upperText: '<span>Пн - Пт</span><span>11 - 20</span>', downText: '<span>Сб - Вск</span><span>&nbsp11 - 18</span>', alt: 'время'},
        {icon:'/icon-phone.svg', upperText: '+7 800 000 00 00', downText: '+7 800 000 00 00', alt: 'телефон'},
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  &-frame
    max-width: 1101px
    width: 100%
    height: 69px
    margin: 30px 54px 20px 45px
    display: flex
    justify-content: space-between
    align-items: center

</style>
ii
