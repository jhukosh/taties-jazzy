<template>
  <div id="Map-component">
      <div id="Location_background">
        <div id="Contact-informations">
          <div class="title-container">
            <h2>CLUB DE JAZZ</h2>
          </div>

          <div id="Adresse-and-mail-container">
            <div class="flex-container">
              <div class="ajust-icon">
                <img src="@/assets/icons/map-pin.png" alt="">
              </div>
              <p>55 Rue Victo Hugo, <span class="bold-text">Fontainebleau</span></p>
            </div>
            <div class="flex-container">
              <div class="ajust-icon">
                <img src="@/assets/icons/mail.png" alt="">
              </div>
              <a class="mail-variation" href="mailto:lestatiesjazzy@gmail.com">lestatiesjazzy@gmail.com</a>
            </div>
          </div>

          <div id="External-link-container">
            <div class="flex-container">
              <img class="company-logo" src="@/assets/icons/logo-waze-icon.png" alt="">
              <a href="https://www.waze.com/ul?ll=48.40930490%2C2.69536190&navigate=yes" target="_blank" rel="noopener noreferrer">Voir l’itinéraire sur Waze</a>
            </div>
            <div class="flex-container">
              <img class="company-logo" src="@/assets/icons/google-maps-icon.png" alt="">
              <a href="https://goo.gl/maps/aE9pE8tfzpcuimmo9" target="_blank" rel="noopener noreferrer">Voir l’itinéraire sur Google Maps</a>
            </div>
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