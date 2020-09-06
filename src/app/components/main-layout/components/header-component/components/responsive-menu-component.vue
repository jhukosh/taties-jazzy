<template>
  <div id="responsiveMenu">
    <button type="button" class="closing-button" title="Menu" @click="closeResponsive">
      <span class="hidden">x</span>
    </button>
    <img src="@/assets/logo515copy.png" alt="Logo Taties Jazzy" id="logoMenu" class="headerLogo" />
    <ul class="sidebar-panel-nav">
      <li class="sousMenu" id="sousMenuAccueil" @click="closeResponsive">
        <router-link to="/" >Accueil</router-link>
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
    <img src="@/assets/social-media/instagram.png" class="socialMediaIcon"/>
    <img src="@/assets/social-media/facebook.png" class="socialMediaIcon"/>
    
  </div>
</template>
    

<script>
export default {
  name: "ResponsiveMenuComponent",
  methods:{
    closeResponsive () {
    this.$emit('closeResponsiveOk', false); 
    }
  }
};
</script>
<style lang="scss" scoped>
.closing-button {
  cursor:pointer;
  font-size: 30px;
  color: #fff;
  position: relative;
  height: 24px;
  width: 24px;
  display: block;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  margin-top: -40px;
}
#sousMenuAccueil{
  a{
  color: #ffffff;
  } 
  a:hover{
  color:$strawberry;
  }
}


#logoMenu {
  height: 40px;
  width: 180px;
  align-self: center;
  position: relative;
  margin-left: 70px;
  margin-bottom: 50px;
  margin-top: -20px;
}
#responsiveMenu {
  overflow-y: auto;
  background-color: #000;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 350px;  
  }
hr{
  background-color:#393939;
  margin-top: 35px;
  margin-bottom: 35px;
  margin-left: 10px;
  margin-right: 0px;
  position:relative;
  width:300px;
}

  p {
    width: 308px;
    height: 58px;
    font-family: BodoniSvtyTwoOSITCTT;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.63px;
    color: #ffffff;
    margin-left: 30px;
    letter-spacing: 2px;
    }

  a {
    color: #393939;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    text-decoration: none;
    text-align: left;
    letter-spacing: 2px;
  }
  a:hover {
    color: $strawberry;
  }
  ul {
    list-style-type: none;
    
  }
  li{
    padding-top: 25px;
  }
  .socialMediaIcon{
    margin-left: 40px;
    width: 55px;
    height: 55px;
    cursor:pointer;
  }

</style>