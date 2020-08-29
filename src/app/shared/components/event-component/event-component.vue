<template>
  <div class="event-main">
    <div class="event-info-container">
      <div class="event-image">
        <img :src="image" alt />
      </div>
      <div class="show-info" v-if="parentData.type === 'show'">
        <EventInfosComponent :event="parentData"/>
      </div>

      <div v-else>
        <p>Masterclassevent</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventInfosComponent from "@/app/shared/components/event-component/components/event-infos-component/event-infos-component.vue";
export default {
  name: "EventComponent",
  components: {
    EventInfosComponent,
  },
  props: ["parentData"],
  // watch: {
  //     parentData: {
  //             handler: 'methodName',
  //             immediate: true
  //         }
  //     },
  methods: {
    getEvent() {
      console.log("result", this.parentData);
    },
  },
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
