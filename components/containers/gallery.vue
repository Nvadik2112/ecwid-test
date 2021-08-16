<template>
  <section class="slider" :style="{ backgroundImage: `url(${gallery[key].url})`}">
    <div class="slider-arrows">
      <slider-arrow class="slider-arrows__arrow slider-arrows__arrow_left" @func="switchPrevSlide"></slider-arrow>
      <slider-arrow class="slider-arrows__arrow slider-arrows__arrow_right" @func="switchNextSlide"></slider-arrow>
    </div>
    <div class="slider-dots">
      <div v-for="(item, index) in gallery" class="slider-dots__dot"
           v-bind:class="{'slider-dots__dot_active': item.isActiveDot}" @click="switchActiveDot(index)">
      </div>
    </div>
  </section>
</template>

<script>
import SliderArrow from "@/components/UI/slider-arrow";
export default {
name: "gallery",
  components: {SliderArrow},
  data() {
    return {
      key: 0,
      gallery:[
        {url: '/sliders/1.png', isActiveDot: true},
        {url: '/sliders/2.jpeg',isActiveDot: false},
        {url: '/sliders/3.jpeg',isActiveDot: false},
        {url: '/sliders/4.jpeg',isActiveDot: false},
        {url: '/sliders/5.jpeg',isActiveDot: false},
      ],
    }
  },
  methods: {
    switchActiveDot(index) {
      this.gallery[this.key].isActiveDot = false
      this.key = index
      this.gallery[this.key].isActiveDot = true
    },
    switchNextSlide() {
      this.gallery[this.key].isActiveDot = false
      this.key < this.gallery.length-1 ? this.key = ++this.key : this.key = 0
      this.gallery[this.key].isActiveDot = true

    },
    switchPrevSlide() {
      this.gallery[this.key].isActiveDot = false
      this.key > 0 ? this.key = --this.key : this.key = this.gallery.length-1
      this.gallery[this.key].isActiveDot = true
    }
  },
  mounted() {
  }
}
</script>

<style lang="sass" scoped>
.slider
  background-size: cover
  background-position: center center
  background-repeat: no-repeat
  position: relative
  max-width: 1100px
  width: 100%
  margin-right: 45px
  margin-left: 45px
  margin-top: 34px
  height: 400px
  display: flex
  align-items: center
  justify-content: center
  & img
    object-fit: cover
    width: 100%
  &-arrows
    display: flex
    height: 31px
    justify-content: space-between
    padding: 0 19px
    width: 100%
    &__arrow_left
      transform: rotate(180deg)
  &-dots
    position: absolute
    width: 170px
    height: 10px
    bottom: 24px
    display: flex
    justify-content: space-between
    &__dot
      width: 10px
      height: 10px
      border-radius: 5px
      background: #FFFFFF
      cursor: pointer
      &_active
        background: #497952
</style>
<style lang="sass" scoped>
@media (max-width: 1100px)
  .slider
    margin-left: 0
    margin-right: 0
@media (max-width: 600px)
  .slider
    height: 300px
@media (max-width: 400px)
  .slider
    height: 250px
</style>
