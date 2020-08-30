<template>
  <div id="Event-component">
    <img v-if="fromHome" src="@/assets/reversed-trumpet.png" alt="" class="event-trumpet-icon"/>
    <div class="event-infos-container">
      <div class="event-infos-image">
        <img :src="image" alt />
      </div>
      <div class="event-infos-content">
        <EventHomeDateComponent v-if="fromHome" :event="parentData" />
        <div class="show-info" v-if="type === 'show'">
          <EventInfosComponent :event="parentData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventInfosComponent from "@/app/shared/components/event-component/components/event-infos-component/event-infos-component.vue";
import EventHomeDateComponent from "@/app/shared/components/event-component/components/event-home-date-component/event-home-date-component.vue";
export default {
  name: "EventComponent",
  components: {
    EventInfosComponent,
    EventHomeDateComponent,
  },
  props: ["parentData", "fromHome", 'type'],
  data() {
    return {
      image: require("@/assets/photo-band-test.jpg"),
    };
  },
  mounted() {
    console.log("Mounted :", this.parentData);
  },
};
</script>

<style lang="scss">
@import "event-component.scss";
</style>
