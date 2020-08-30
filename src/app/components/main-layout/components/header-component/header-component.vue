<template>
  <div id="Header-container">
    <ul class="navList">
      <li class="navItem">
        <router-link to="/">Accueil</router-link>
      </li>
      <li class="navItem">
        <router-link to="/shows">Concerts</router-link>
      </li>
      <li class="navItem">
        <router-link to="/classes">Master class</router-link>
      </li>
      <li>
        <img src="@/assets/logo515.png" alt="Logo Taties Jazzy" class="headerLogo" />
      </li>
      <li class="navItem">
        <router-link to="/association">L'association</router-link>
      </li>
      <li class="navItem">
        <router-link to="/club">Le club</router-link>
      </li>
      <li class="navItem">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style lang="scss" scoped>
@import "header-component.scss";
</style>
