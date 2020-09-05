<template>
  <div id="Header-container">
    <ul class="navList">
      <li class="headerBurger">
        <img src="@/assets/icons/menu-icon.jpg" alt="Menu Burger" />     
      </li>
      <!-- <div class="Menu">
        <div class="headerSousMenu">
          <a class="sousMenu" href="#" id="close">×</a>
          <img src=@/assets/logo515copy.png class="menuLogo">
        </div>
              <a class="sousMenu" href="#">Accueil</a>
              <a class="sousMenu" href="#"> Concert</a>
              <a class="sousMenu" href="#">Masterclass</a>
              <a class="sousMenu" href="#">L'association</a>
              <a class="sousMenu" href="#">Le Club</a>
              <a class="sousMenu" href="#">Contact</a>
              <p class="sousMenu"> Retrouvez nous sur les réseaux sociaux</p>
      </div>   -->   
      <li class="navItem">
        <router-link to="/">Accueil</router-link>
      </li>
      <li class="navItem">
        <router-link to="/shows">Concerts</router-link>
      </li>
      <li class="navItem">
        <router-link to="/classes">Master class</router-link>
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
