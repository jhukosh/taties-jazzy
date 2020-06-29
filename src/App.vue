<template>
  <div id="app">
    <HeaderComponent />
    <FooterComponent />
  </div>
</template>

<script>
  import HeaderComponent from '@/app/components/main-layout/components/header-component/header-component.vue'
  import FooterComponent from '@/app/components/main-layout/components/footer-component/footer-component.vue'

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss">
  @import "main.scss";
</style>
