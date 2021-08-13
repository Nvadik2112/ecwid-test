<template>
  <div class="slider-arrow" @click="click">
      <div class="slider-arrow__part slider-arrow__part_up">
      </div>
      <div class="slider-arrow__part slider-arrow__part_down">
    </div>
  </div>
</template>

<script>
export default {
  name: "slider-arrow",
  methods: {
    click() {
      this.$emit('func')
    }
  }
}
</script>

<style lang="sass" scoped>
.slider-arrow
  cursor: pointer
  border-radius: 15px
  background-color: #ffffff
  height: 28px
  width: 28px
  border: 1px solid #497952
  position: relative
  -webkit-transition: all 0.2s ease-out
  -moz-transition: all 0.2s ease-out
  -o-transition: all 0.2s ease-out
  transition: all 0.2s ease-out
  &:hover
    border: 1px solid #ccff00
    background-color: #535353
  &:hover .slider-arrow__part
    background: #ccff00
  &__part
    right: 9px
    background: #497952
    position: absolute
    height: 2px
    width: 8.2px
    &_up
      top: 10.5px
      transform: rotate(-129.81deg)
    &_down
      bottom: 10.5px
      transform: rotate(+129.81deg)

</style>
