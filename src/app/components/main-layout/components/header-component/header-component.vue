<template>
  <div id="Header-container">
    <ul class="navList">
      <!-- Burger menu -->
      <li class="headerBurger">
        <img src="@/assets/icons/menu-icon.jpg" alt="Menu Burger" @click="displayResponsiveMenu"/>     
      </li>

      <ResponsiveMenuComponent v-if="displayMenu" @closeResponsiveOk="closing"/>
              
      <li class="navItem" @click="displayResponsiveMenu">
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
import ResponsiveMenuComponent from '@/app/components/main-layout/components/header-component/components/responsive-menu-component.vue';
export default {
  name: "HeaderComponent",
  components: {
    ResponsiveMenuComponent
  },
  data: function() {
    return {
      displayMenu: false
    }
  },
  methods: {
    displayResponsiveMenu: function(){
    this.displayMenu = !this.displayMenu
    },
    closing(bool){
      console.log('bool', bool)
      this.displayMenu=false     
    }
  }
};

</script>
<style lang="scss" scoped>
@import "header-component.scss";
</style>
