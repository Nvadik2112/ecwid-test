<template>
  <div>
    <mobile-menu />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/containers/header";
import MobileMenu from "@/components/containers/MobileMenu";
export default {
  components: {Header, MobileMenu},
  name: "default"
}
</script>

<style scoped>

</style>
