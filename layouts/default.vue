<template>
  <div>
    <MobileMenu />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/containers/header";
import MobileMenu from "@/components/containers/mobileMenu";
export default {
  components: {Header, MobileMenu},
  name: "default"
}
</script>

<style scoped>

</style>
