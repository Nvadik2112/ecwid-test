<template>
  <main>
    <Gallery />
    <Advantages />
  </main>
</template>

<script>


import Gallery from "@/components/containers/gallery";
import Advantages from "@/components/containers/advantages";
export default {
  components: {Advantages, Gallery}
}
</script>
<style lang="sass">
main
  display: flex
  flex-direction: column
  align-items: center
</style>
