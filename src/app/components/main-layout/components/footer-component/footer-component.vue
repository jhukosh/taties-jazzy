<template>
  <div id="Footer-container">
    <div class="footer-ticket-booking">
      <div>
        <p
          class="footer-ticket-booking-first-paragraph"
        >Vous ne voulez pas louper votre artiste préféré ?</p>
        <p class="footer-ticket-booking-second-paragraph">
          Avec
          <span>Weezevent</span> réservez vos billets en un clic et obtenez
          <span>10% de rabais !</span>
        </p>
      </div>
      <div>
        <button class="black-button black-button-txt">RÉSERVER MON BILLET</button>
      </div>
    </div>
    <div class="footer-sections">
      <div class="section">
        <div class="first-section-logos">
          <GirlsAndBannerLogoComponent />
        </div>
        <div class="first-section-links">
          <ul class="links-list">
            <li>
              <router-link to="/association">Association</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
            <li>
              <router-link to="/shows">Concerts</router-link>
            </li>
            <li>
              <router-link to="/classes">Master class</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="section">
        <div class="footer-contact">
          <div class="footer-club-location">
            <div class="pin-icon"></div>
            <p>
              Le Club
              <br />23 rue Voltaire
              <br />Fontainebleau
              <br />
            </p>
          </div>
          <div class="footer-email-contact">
            <div class="mail-icon"></div>
            <a
              href="mailto:lestatiesjazzy@gmail.com"
              title="Envoyer un email à l'association"
            >lestatiesjazzy@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="footer-social-media">
          <div class="footer-instagram">
            <img src="@/assets/social-media/instagram.png" alt="Logo Instagram" />
            <a
              href="https://www.instagram.com/lestatiesjazzy/?hl=fr"
              target="_blank"
              title="Redirection vers le compte instagram"
            >@lestatiesjazzy</a>
          </div>
          <div class="footer-facebook">
            <img src="@/assets/social-media/facebook.png" alt="Logo Facebook" />
            <a
              href="https://www.facebook.com/lestatiesjazzy"
              target="_blank"
              title="Redirection vers le compte facebook"
            >Les Taties Jazzy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GirlsAndBannerLogoComponent from "@/app/shared/components/girls-and-banner-logo-component/girls-and-banner-logo-component.vue";

export default {
  name: "FooterComponent",
  components: {
    GirlsAndBannerLogoComponent,
  },
};
</script>
<style lang="scss" scoped>
@import "footer-component.scss";
</style>
