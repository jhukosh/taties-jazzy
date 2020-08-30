<template>
  <div id="Master-classes-page">
    <TitleBackgroundComponent
      :background_image="path_to_image"
      :background_title="background_title_value"
    />
    <div id="Masterclasses-page-container">
      <div class="masterclass-item" v-for="masterclass in masterClasses" :key="masterclass.id">
        <EventDateComponent :date="masterclass.date"/>
        <EventComponent :parentData="masterclass" :eventPicture="tmpClassPicture" :type="'masterclass'" />
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseService } from "@/core/services/firebase-service.js";
import TitleBackgroundComponent from "@/app/shared/components/title-background-component/title-background-component.vue";
import EventComponent from "@/app/shared/components/event-component/event-component.vue";
import EventDateComponent from "@/app/shared/components/event-date-component/event-date-component.vue";

export default {
  name: "MasterClassesPage",
  mixins: [firebaseService],
  components: {
    TitleBackgroundComponent,
    EventComponent,
    EventDateComponent
  },
   data() {
    return {
      masterClasses: {},
      tmpClassPicture: require("@/assets/masterclasses-page-assets/batterie.jpg"),
      path_to_image: "masterclasses-page-assets/masterclasses-banner.jpg",
      background_title_value: "Master Classes"
    };
  },
  methods: {
    async getShowsToDisplay() {
      this.getAllMasterClasses().then((res) => {
        this.masterClasses = res;
      });
    },
  },
  beforeMount() {
    this.getShowsToDisplay();
  },
};
</script>
<style lang="scss" scoped>
@import 'master-classes-page.scss';
</style>
