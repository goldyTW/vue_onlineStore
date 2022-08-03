<template>
  <div class="Success">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <header> -->
      <header-shayna/>
        <div class="d-flex success-checkout align-items-center justify-content-center">
          <div class="col col-lg-4 text-center">
              <img src="img/success-buy.png" alt="" width="294">
              <h3 class="mt-4">
                  Sukses Terbayar!
              </h3>
              <p class="mt-2">
                  Silakan tunggu update terbaru dari kami via email yang sudah Anda daftarkan sebelumnya.
              </p>
              <router-link to="/"> <a class="primary-btn pd-cart mt-3">Home</a></router-link>
          </div>
      </div>
      <footer-shayna/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderShayna from '@/components/HeaderShayna.vue'
import FooterShayna from '../components/FooterShayna.vue'
export default {
  name: 'Success',
  components: {
    HeaderShayna,
    FooterShayna
  }
}
</script>

    