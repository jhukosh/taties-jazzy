<template>
  <div id="Responsive-menu">
    <div class="responsive-menu-header row-horizontal-start">
      <button type="button" class="closing-button" title="Menu" @click="closeResponsive">
        <span class="hidden">X</span>
      </button>
      <img src="@/assets/logo515copy.png" alt="Logo Taties Jazzy" id="logoMenu">
    </div>
    <ul class="sidebar-panel-nav">
      <li class="sousMenu" @click="closeResponsive">
        <router-link to="/">Accueil</router-link>
      </li>
      <li class="sousMenu" @click="closeResponsive">
        <router-link to="/shows">Concerts</router-link>
      </li>
      <li class="sousMenu" @click="closeResponsive">
        <router-link to="/classes">Master class</router-link>
      </li>
      <li class="sousMenu" @click="closeResponsive">
        <router-link to="/association">L'association</router-link>
      </li>
      <li class="sousMenu" @click="closeResponsive">
        <router-link to="/club">Le club</router-link>
      </li>
      <li class="sousMenu" @click="closeResponsive">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <hr>
    <p>Retrouvez nous sur les réseaux sociaux !</p>
    <a
      href="https://www.instagram.com/lestatiesjazzy/?hl=fr"
      target="_blank"
      title="Redirection vers le compte instagram"
    >
      <img src="@/assets/social-media/instagram.png" class="socialMediaIcon">
    </a>
    <a
      href="https://www.facebook.com/lestatiesjazzy"
      target="_blank"
      title="Redirection vers le compte facebook"
    >
      <img src="@/assets/social-media/facebook.png" class="socialMediaIcon">
    </a>
  </div>
</template>

<script>
export default {
  name: "ResponsiveMenuComponent",
  methods: {
    closeResponsive() {
      document.documentElement.style.overflow = "scroll";
      this.$emit("closeResponsiveOk", false);
    },
    disableScroll() {
      document.documentElement.style.overflow = "hidden";
    }
  },
  mounted() {
    this.disableScroll();
  }
};
</script>
<style lang="scss" scoped>
@import "responsive-menu-component.scss";
</style>