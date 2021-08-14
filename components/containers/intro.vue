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
      <img src="/info_logo/video_icon.svg" alt="иконка">
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
  & img
    cursor: pointer

</style>
