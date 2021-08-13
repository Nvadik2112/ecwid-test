<template>
  <section class="advantages">
    <div v-for="item in list" class="advantages__item" :class="'advantages__item_'+item.modificator">
      <img :src="item.url" alt="овца">
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
        {url: '/advantages_logo/sheep_icon.svg', modificator: 'sheep', text: 'Только<br>натуральный состав'},
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
  margin: 70px 0
  display: flex
  justify-content: space-between
  align-items: center
  &__item
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 145px
    & div
      display: flex
      flex-wrap: wrap
      justify-content: center
      & p
        font-size: 14px
        line-height: 19px
        color: #497952
        text-align: center
    &_sheep
      width: 210px
</style>
