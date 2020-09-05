<template>
  <div id="Header-container">
    <ul class="navList">

      <div id="app">
      <burger></burger>
      </div>

      <template id="burger">
      <div id="burger" 
      :class="{ 'active' : isBurgerActive }"
       @click.prevent="toggle">
        
      <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
      </slot>      
      </div>
      </template>

      <template>
      <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
      </div>
      </template>
      <template>
        <div id="app">
        <nav class="main-nav">
          <div class="logo">my.company
        </div>
          <Burger></Burger>
        </nav>

      <Sidebar>
        <ul class="sidebar-panel-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Sidebar>
    </div>
  </template>
         
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
  data: () => ({
        isBurgerActive: false,
        isPanelOpen: true,
        }),
        
  methods: {
  toggle() {
        this.isBurgerActive = !this.isBurgerActive
            },
  closeSidebarPanel() {
        this.isPanelOpen = false
            }
        },   
};

</script>
<style lang="scss" scoped>
@import "header-component.scss";
</style>

