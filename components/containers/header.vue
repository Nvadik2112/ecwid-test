<template>
  <header>
    <div class="header-top">
      <div class="header-top__frame">
        <div class="logo">
          <img src="/header_logo/logo_header.svg" alt="Логотип">
        </div>
       <div class="contacts">
         <div>
          <div v-for="item in contacts" class="contacts__item">
            <img :src="item.icon" :alt="item.alt">
            <div :id="item.id" v-if="item.upperText && item.downText">
              <p v-html="item.upperText"></p>
              <p v-html="item.downText"></p>
            </div>
          </div>
          </div>
        </div>
        <div id="icon-basket">
          <img src="/header_logo/icon-basket.svg" alt="корзина">
        </div>
      </div>
    </div>
    <div class="menu menu_desktop">
      <div class="menu__frame menu__frame_desktop">
          <a v-for="item in menu" :href="item.url">
            {{item.text}}
          </a>
      </div>
      <div class="menu__button">
        <img @click="showMobileMenu" style="width: 30px; height: 30px; padding-top: 12px" src="/header_logo/burger_menu.svg" alt="">
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "header.vue",
  data() {
    return {
      contacts: [
        {icon:'/header_logo/icon-map.svg', upperText: 'м. Кропоткинская', downText: 'Соймоновский проезд, д.7 с.1', alt: 'карта'},
        {icon:'/header_logo/icon-time.svg', upperText: '<span>Пн - Пт</span><span>11 - 20</span>', downText: '<span>Сб - Вск</span><span>&nbsp11 - 18</span>', alt: 'время'},
        {icon:'/header_logo/icon-phone.svg', upperText: '+7 800 000 00 00', downText: '+7 800 000 00 00', alt: 'телефон'},
      ],
      menu: [
        {text: 'Пряжа', url: '/'},
        {text: 'Спицы', url: '/'},
        {text: 'Крючки', url: '/'},
        {text: 'Аккессуары', url: '/'},
        {text: 'Подарочные сертификаты', url: '/'},
        {text: 'МК и описания', url: '/'},
        {text: 'Модели', url: '/'}
      ]
    }
  },
  methods: {
    showMobileMenu() {
      this.$store.dispatch('data/setMobileMenu', true)
      this.$store.dispatch('data/setList', this.menu)
    }
  }
}
</script>
<style lang="sass" scoped>
header
  display: flex
  align-items: center
  flex-direction: column
.header
  &-top
    display: flex
    justify-content: center
    align-items: center
    height: 119px
    width: 100%
    &__frame
      max-width: 1101px
      width: 100%
      height: 69px
      margin: 30px 9px 19px 0
      display: flex
      justify-content: space-between
      align-items: center
.contacts
  width: 100%
  margin-left: 103px
  margin-right: 118px
  z-index: 1
  & div
    display: flex
    justify-content: space-between
  &__item
    display: flex
    align-items: center
    & div
      margin-left: 17px
      height: 30px
      display: flex
      flex-direction: column
      justify-content: center
      & p
        min-width: 102px
        display: flex
        justify-content: space-between
        font:
          style: normal
          size: 13px
        line-height: 18px
        color: #535353
#icon-basket
  cursor: pointer
</style>
<style lang="sass" scoped>
@media (max-width: 1100px)
  .logo
    margin-left: 10px
  .header
    &-top
      width: 100%
      &__frame
        margin-right: 0
  #icon-basket
    margin-right: 5px
@media (max-width: 900px)
  .contacts
    overflow-x: scroll
    margin-left: 25px
    margin-right: 25px
    scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1)
    scrollbar-width: thin
    &::-webkit-scrollbar
      height: 4px
    &::-webkit-scrollbar-track
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)
    &::-webkit-scrollbar-thumb
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8)
    &>div
      width: 700px
      margin: 20px 10px 10px 10px
</style>
