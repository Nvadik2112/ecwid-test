<template>
  <header>
    <div class="header-top">
      <div class="header-top__frame">
        <div class="logo">
          <img src="/header_logo/logo_header.svg" alt="Логотип">
        </div>
       <div class="contacts">
          <div v-for="item in contacts" class="contacts__item">
            <img :src="item.icon" :alt="item.alt">
            <div :id="item.id" v-if="item.upperText && item.downText">
              <p v-html="item.upperText"></p>
              <p v-html="item.downText"></p>
            </div>
          </div>
        </div>
        <div id="icon-basket">
          <img src="/header_logo/icon-basket.svg" alt="корзина">
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="menu__frame">
          <a v-for="item in menu" :href="item.url">
            {{item.text}}
          </a>
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
  display: flex
  width: 100%
  justify-content: space-between
  margin-left: 103px
  margin-right: 118px
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
.menu
  width: 100%
  background-color: #497952
  height: 40px
  display: flex
  align-items: center
  justify-content: center
  &__frame
    max-width: 795px
    width: 100%
    display: flex
    justify-content: space-between
    & a
      text-decoration: none
      font:
        weight: 700
        size: 14px
      line-height: 19px
      color: #FAFFFA
      -webkit-transition: color 0.2s ease-out
      -moz-transition: color 0.2s ease-out
      -o-transition: color 0.2s ease-out
      transition: color 0.2s ease-out
      &:hover
        color: #ccff00
</style>

