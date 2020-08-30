<template>
  <div id="Contact-page-component">
    <TitleBackgroundComponent
      :background_image="path_to_image"
      :background_title="background_title_value"
    />
    <TatiesTitleComponent :subtitle="title.subtitle_value" :title="title.contact_title" />
    <div id="Form-and-info-container">
      <!-- TODO Make this contact form work and replace mailto on pages
      <ContactFormComponent />
      -->
      <InfoContactFormComponent />
      <div class="contact-page-tmp-placeholder">
        <p
        >N'hésitez pas à nous envoyer un email en précisant votre demande !</p>
        <button
          class="black-button black-button-txt"
        >ENVOYER UN EMAIL</button>
        <img src="@/assets/contact-page-assets/send-email-icon.png" alt="">
      </div>
    </div>
    <MapComponent />
  </div>
</template>

<script>
import TitleBackgroundComponent from "@/app/shared/components/title-background-component/title-background-component.vue";
import TatiesTitleComponent from "@/app/shared/components/taties-title-component/taties-title-component.vue";
//import ContactFormComponent from "@/app/components/contact-page/components/contact-form-component/contact-form-component.vue";
import InfoContactFormComponent from "@/app/components/contact-page/components/info-contact-form-component/info-contact-form-component.vue";
import MapComponent from "@/app/components/contact-page/components/map-component/map-component.vue";

export default {
  name: "ContactPage",
  components: {
    TitleBackgroundComponent,
    TatiesTitleComponent,
    //ContactFormComponent,
    InfoContactFormComponent,
    MapComponent,
  },
  data: () => {
    return {
      path_to_image: "contact-page-assets/contact-banner.png",
      background_title_value: "Contact",
      title: {
        contact_title: "Contact",
        subtitle_value: "Les Taties Jazzy",
      },
    };
  },
};
</script>

<style lang="scss">
@import "contact-page.scss";
</style>