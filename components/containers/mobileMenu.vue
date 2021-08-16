<template>
  <div class="menu menu_mobile" v-if="menuMobile">
    <div @click="showMobileMenu" class="menu__overflow"></div>
      <div class="menu__frame menu__frame_mobile">
        <a v-for="item in menu" :href="item.url">
          {{item.text}}
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: "mobile-menu",
  computed: {
    menuMobile() {
      return this.$store.state.data.mobileMenu
    },
    menu() {
      return this.$store.state.data.list
    }
  },
  methods: {
    showMobileMenu() {
      this.$store.dispatch('data/setMobileMenu', false)
    },
  }
}
</script>

<style lang="sass" scoped>
</style>
