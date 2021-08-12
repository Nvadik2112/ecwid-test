<template>
  <header>
    <Header />
  </header>
</template>

<script>
import Header from "~/components/header";

export default {
  components: {Header}
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap')
*
  padding: 0
  margin: 0
body
  box-sizing: border-box!important
  background-color: white
header
  display: flex
  justify-content: center
.logo-main
  width: 91px
  height: 70px
.icon
  width: 30px
  height: 30px
.contact
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
        family: 'Open Sans', sans-serif
        style: normal
        size: 13px
      line-height: 18px
      color: #535353
.menu-button
  cursor: pointer
</style>
