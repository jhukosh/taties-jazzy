<template>
  <div id="app">
    <MenuComponent />
    <FooterComponent />
  </div>
</template>

<script>
  import MenuComponent from '@/app/main-layout/components/menu-component/menu-component.vue'
  import FooterComponent from '@/app/main-layout/components/footer-component/footer-component.vue'

  export default {
    name: 'App',
    components: {
      MenuComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss">
  @import "main.scss";

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
