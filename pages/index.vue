<template>
  <main>
    <Gallery />
    <Advantages />
    <Info />
  </main>
</template>

<script>


import Gallery from "@/components/containers/gallery";
import Advantages from "@/components/containers/advantages";
import Info from "~/components/containers/intro";
export default {
  components: {Advantages, Gallery, Info}
}
</script>
<style lang="sass">
main
  display: flex
  flex-direction: column
  align-items: center
</style>
