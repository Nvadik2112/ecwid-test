<template>
  <section class="intro">
    <div class="about">
      <h3>Добро пожаловать в наш новый магазин!</h3>
        <p>Мы садимся вязать, и вселенная вокруг начинает жить по-другому. Точнее, мы создаем
        собственную вселенную, в которой мы отдыхаем, вдохновляемся и создаем шедевры.
        Наш магазин за то, чтобы вы занимались своим любимым делом с удовольствием. Наш
        магазин – это место, где вам предложат пряжу и инструмент исключительного качества
        для создания лучших творений, которые вы только задумали. Наш магазин – это место,
          куда вы просто можете прийти поболтать и выпить чашечку кофе за вязанием</p>
      <div class="about__link">
        <a href="/">Узнать о нас больше</a>
      </div>
    </div>
    <div class="video">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="57" height="57" rx="28.5" stroke="#497952" stroke-width="3"/>
        <path d="M47.0003 30L21.5006 44.7229L21.5 15.2781L47.0003 30Z" fill="#497952"/>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "intro"
}
</script>

<style lang="sass" scoped>
.intro
  margin-top: 4px
  margin-bottom: 81px
  height: 213px
  width: 100%
  max-width: 976px
  display: flex
  justify-content: space-between
.about
  width: 539px
  color: #535353
  & h3
    text-transform: uppercase
    font:
      size: 16px
      weight: 700
  & p
    display: flex
    align-items: stretch
    margin-top: 9px
    font:
      size: 12px
    line-height: 26px
    height: 153px
  &__link
    display: flex
    justify-content: flex-end
    margin-top: 19px
    & a
      font:
        size: 11px
        weight: 400
      line-height: 15px
      width: 113px
      color: #497952
.video
  width: 350px
  background-color: #F9EDF0
  border: 1px solid #497952
  display: flex
  align-items: center
  justify-content: center
  margin-top: 2px
  & svg
    cursor: pointer
    &:hover
      fill: #535353
      & rect
        stroke: #ccff00
      & path
        fill: #ccff00
</style>
<style lang="sass" scoped>
@media (max-width: 900px)
  .intro
    width: 95%
    flex-direction: column
    align-items: center
    margin-left: auto
    margin-right: auto
    height: inherit
  .about
    width: 100%
    max-width: 538px
    margin-bottom: 30px
    & p
      height: inherit
  .video
    height: 213px
    width: 100%
    max-width: 350px
</style>
