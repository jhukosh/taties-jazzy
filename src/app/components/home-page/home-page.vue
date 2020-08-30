<template>
  <div id="Home-page-container">
    <HomeBand />
    <!-- Opening Component to remove later on -->
    <OpeningComponent />

    <!-- Main show to promote from home-events collection -->
    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.agenda"
      :undisplayDot="true"
    />
    <EventComponent
      v-if="homeShow"
      :parentData="homeShow"
      :eventPicture="tmpEventShowPicture"
      :fromHome="true"
      :type="'show'"
    />
    <!-- Placeholder if none show to promote -->
    <div v-else-if="!homeShow" class="home-page-show-placeholder">
      <h4>La programmation des événements est en cours !</h4>
      <img :src="tmpEventShowPicture" alt />
    </div>

    <!-- Red backgrounded join us component -->
    <BackgroundedInfosComponent :parentData="'circle'" id="Home-page-register-component" />

    <!-- Fares cards component -->
    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.fares"
      :undisplayDot="true"
    />
    <FaresComponent />

    <!-- Taties Jazzy offers component TODO: second tab -->
    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.offers"
      :undisplayDot="true"
    />
    <OffersComponent />

    <!-- Become member backgrounded band component -->
    <JoinComponent />

    <!-- Main masterclass to promote from home-events collection -->
    <TatiesTitleComponent
      v-if="homeClass"
      :subtitle="title.title_masterclass"
      :title="title.title_masterclass"
      :undisplayDot="true"
    />
    <EventComponent
      v-if="homeClass"
      :parentData="homeClass"
      :eventPicture="tmpClassPicture"
      :fromHome="true"
      :type="'masterclass'"
    />

    <!-- Red backgrounded who are we component -->
    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.about_us"
      :undisplayDot="false"
    />
    <BackgroundedInfosComponent :parentData="'trumpet'" />

    <!-- Social media -->
    <!-- TODO Transfer social media in a dedicated component -->
    <div class="home-social-media">
      <h4>
        Retrouvez nous sur les
        <span class="home-social-media-text">réseaux sociaux</span> !
      </h4>
      <div class="home-social-media-icons">
        <a
          href="https://www.instagram.com/lestatiesjazzy/?hl=fr"
          target="_blank"
          title="Redirection vers le compte instagram"
        >
          <img src="@/assets/social-media/instagram.png" alt="Logo Instagram" />
        </a>
        <a
          href="https://www.facebook.com/lestatiesjazzy"
          target="_blank"
          title="Redirection vers le compte facebook"
        >
          <img src="@/assets/social-media/facebook.png" alt="Logo Facebook" />
        </a>
      </div>
      <div class="home-img-gallery">
        <img src="@/assets/gallery-1.jpg" alt />
        <img src="@/assets/gallery-2.jpg" alt />
        <img src="@/assets/gallery-3.jpg" alt />
        <img src="@/assets/gallery-4.jpg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import HomeBand from "@/app/components/home-page/components/home-band-component/home-band-component.vue";
import OpeningComponent from "@/app/components/home-page/components/opening-component/opening-component.vue";
import FaresComponent from "@/app/components/home-page/components/fares-component/fares-component.vue";
import OffersComponent from "@/app/components/home-page/components/offers-component/offers-component.vue";
import JoinComponent from "@/app/components/home-page/components/join-component/join-component.vue";
import EventComponent from "@/app/shared/components/event-component/event-component.vue";
import BackgroundedInfosComponent from "@/app/shared/components/backgrounded-infos-component/backgrounded-infos-component.vue";
import TatiesTitleComponent from "@/app/shared/components/taties-title-component/taties-title-component.vue";
import { firebaseService } from "@/core/services/firebase-service.js";

export default {
  name: "Home",
  mixins: [firebaseService],
  components: {
    HomeBand,
    EventComponent,
    BackgroundedInfosComponent,
    JoinComponent,
    OpeningComponent,
    OffersComponent,
    FaresComponent,
    TatiesTitleComponent,
  },
  data() {
    return {
      homeShow: null,
      tmpEventShowPicture: require("@/assets/photo-band-test.jpg"),
      homeClass: null,
      tmpClassPicture: require("@/assets/masterclasses-page-assets/batterie.jpg"),
      title: {
        agenda: "Programmation",
        fares: "Nos Tarifs Concerts",
        about_us: "Qui sommes-nous ?",
        offers: "Vous proposent",
        subtitle_value: "Les Taties Jazzy",
        title_masterclass: "Master Class",
      },
    };
  },
  async beforeMount() {
    await this.getHomeEvents().then(async (res) => {
      const homeShow =
        res.filter((show) => show.eventCollection === "shows")[0] || null;
      const homeShowEventId = homeShow ? homeShow.eventId : null;
      const homeMasterClass =
        res.filter(
          (masterclass) => masterclass.eventCollection === "masterclasses"
        )[0] || null;
      const homeMasterClassEventId = homeMasterClass
        ? homeMasterClass.eventId
        : null;
      this.homeShow = homeShowEventId
        ? await this.getShowById(homeShowEventId)
        : null;
      this.homeClass = homeMasterClassEventId
        ? await this.getMasterClassById(homeMasterClassEventId)
        : null;
    });
  },
};
</script>
<style lang="scss">
@import "home-page.scss";
</style>
