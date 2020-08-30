<template>
  <div id="Show-page-component">
    <TitleBackgroundComponent
      :background_image="path_to_image"
      :background_title="background_title_value"
    />

    <div v-if="shows && shows.length > 0" id="Show-page-container">
      <div class="show-item" v-for="show in shows" :key="show.id">
        <EventDateComponent :date="show.date"/>
        <EventComponent :parentData="show" :eventPicture="tmpShowsPicture" :type="'show'" />
      </div>
    </div>
    <div v-else-if="!shows || shows.length === 0" class="show-page-placeholder">
      <h4>La programmation des concerts est en cours !</h4>
      <img :src="tmpShowsPicture" alt />
    </div>
  </div>
</template>

<script>
import { firebaseService } from "@/core/services/firebase-service.js";
import TitleBackgroundComponent from "../../shared/components/title-background-component/title-background-component.vue";
import EventComponent from "@/app/shared/components/event-component/event-component.vue";
import EventDateComponent from "@/app/shared/components/event-date-component/event-date-component.vue";

export default {
  name: "ShowsPage",
  components: {
    TitleBackgroundComponent,
    EventComponent,
    EventDateComponent,
  },
  mixins: [firebaseService],
  data() {
    return {
      shows: [],
      tmpShowsPicture: require("@/assets/photo-band-test.jpg"),
      path_to_image: "show-page-assets/show-banner.png",
      background_title_value: "Concerts"
    };
  },
  methods: {
    async getShowsToDisplay() {
      this.getAllShows().then((res) => {
        this.shows = res;
      });
    },
  },
  beforeMount() {
    this.getShowsToDisplay();
  }
};
</script>

<style lang="scss">
@import "shows-page.scss";
</style>
