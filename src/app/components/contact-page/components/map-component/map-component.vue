<template>
  <div id="Map-component">
    <div id="Contact-informations">
      <div class="title-container">
        <h2>CLUB DE JAZZ</h2>
      </div>

      <div id="Adresse-and-mail-container">
        <div class="flex-container">
          <div class="ajust-icon">
            <img src="../../../../../assets/icons/map-pin.png" alt="">
          </div>
          <p>55 Rue Victo Hugo, <span class="bold-text">Fontainebleau</span></p>
        </div>
        <div class="flex-container">
          <div class="ajust-icon">
            <img src="../../../../../assets/icons/mail.png" alt="">
          </div>
          <p class="mail-variation">lestatiesjazzy@gmail.com</p>
        </div>
      </div>

      <div id="External-link-container">
        <div class="flex-container">
          <img class="company-logo" src="../../../../../assets/icons/logo-waze-icon.png" alt="">
          <p>Voir l’itinéraire sur Waze</p>
        </div>
        <div class="flex-container">
          <img class="company-logo" src="../../../../../assets/icons/google-maps-icon.png" alt="">
          <p>Voir l’itinéraire sur Google Maps</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MapComponent'
}
</script>

<style lang="scss">
    @import "map-component.scss";
</style>