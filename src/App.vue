<template>
  <div id="app">
    <h1>Test</h1>
    <img alt="Vue logo" src="./assets/frog.png">
    <MainLayout msg="Coucou Frofro"/>
  </div>
</template>

<script>
import MainLayout from './app/main-layout/main-layout.vue'

export default {
  name: 'App',
  components: {
    /* eslint-disable vue/no-unused-components */
    MainLayout
  }
}
</script>

<style lang="scss">
   @import "main.scss";
</style>
