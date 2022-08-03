<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <header> -->
      <header-shayna/>
      <hero-shayna/>
      <item-shayna/>
      <IG/>
      <partner-shayna/>
      <footer-shayna/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderShayna from '@/components/HeaderShayna.vue'
import IG from '../components/IG.vue'
import PartnerShayna from '../components/PartnerShayna.vue'
import FooterShayna from '../components/FooterShayna.vue'
import HeroShayna from '../components/HeroShayna.vue'
import ItemShayna from '../components/ItemShayna.vue'
export default {
  name: 'Home',
  components: {
    HeaderShayna,
    IG,
    PartnerShayna,
    HeroShayna,
      ItemShayna,
    FooterShayna
  }
}
</script>

    