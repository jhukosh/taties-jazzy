<template>
  <div id="Event-component">
    <div
      class="event-trumpet-icon"
      :style="fromHome ? type === 'show' ? 'width: fit-content': 'width: 10%': 'display: none'"
    >
      <img src="@/assets/reversed-trumpet.png" alt v-if="fromHome && type === 'show'" />
    </div>
    <div class="event-infos-container">
      <div class="event-infos-image">
        <img :src="eventPicture" alt />
      </div>
      <div class="event-infos-content">
        <EventHomeDateComponent v-if="fromHome" :event="parentData" :type="type" />
        <div class="event-infos-content-show">
          <EventInfosComponent :event="parentData" :type="type" :fromHome="fromHome" />
        </div>
      </div>
      <div class="event-handle-icon" v-if="fromHome && type === 'masterclass'">
        <img src="@/assets/handle.png" alt />
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
  props: ["parentData", "fromHome", "type", "eventPicture"],
  mounted() {
    console.log("Mounted :", this.parentData);
  },
};
</script>

<style lang="scss">
@import "event-component.scss";
</style>
