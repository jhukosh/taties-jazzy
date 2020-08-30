<template>
  <div id="Home-page-component">
    <HomeBand />
    <OpeningComponent />

    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.agenda"
      :undisplayDot="true"
    />
    <EventComponent :parentData="homeShow" :eventPicture="tmpEventShowPicture" :fromHome="true" :type="'show'"/>

    <BackgroundedInfosComponent :parentData="'circle'" />
    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.fares"
      :undisplayDot="true"
    />
    <FaresComponent />
    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.offers"
      :undisplayDot="true"
    />
    <OffersComponent />
    <JoinComponent />
    <TatiesTitleComponent :subtitle="title.title_masterclass" :title="title.title_masterclass" :undisplayDot="true" />
    <EventComponent :parentData="homeClass" :eventPicture="tmpClassPicture" :fromHome="true" :type="'masterclass'"/> 
    <TatiesTitleComponent
      :subtitle="title.subtitle_value"
      :title="title.about_us"
      :undisplayDot="false"
    />
    <BackgroundedInfosComponent :parentData="'trumpet'" />
    <!-- TODO Transfer social media in a dedicated component -->
    <div class="home-social-media">
      <h4>
        Retrouvez nous sur les
        <span class="home-social-media-text">réseaux sociaux</span> !
      </h4>
      <div class="home-social-media-icons">
        <img src="@/assets/social-media/instagram.png" alt="Logo Instagram" />
        <img src="@/assets/social-media/facebook.png" alt="Logo Facebook" />
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
      homeShow: {},
      tmpEventShowPicture: require("@/assets/photo-band-test.jpg"),
      homeClass: {},
      tmpClassPicture: require("@/assets/masterclasses-page-assets/batterie.jpg"),
      title: {
        agenda: "Programmation",
        fares: "Nos Tarifs Concerts",
        about_us: "Qui sommes-nous ?",
        offers: "Vous proposent",
        subtitle_value: "Les Taties Jazzy",
        title_masterclass: "Master Class"
      },
    };
  },
  async beforeMount() {
    await this.getHomeEvents().then(async (res) => {
      const homeShowEventId = res.filter(
        (show) => show.eventCollection === "shows"
      )[0].eventId;
      const homeMasterClassEventId = res.filter(
        (masterclass) => masterclass.eventCollection === "masterclasses"
      )[0].eventId;
      this.homeShow = await this.getShowById(homeShowEventId);
      this.homeClass = await this.getMasterClassById(homeMasterClassEventId);
    });
  },
};
</script>
<style lang="scss">
@import "home-page.scss";
</style>
