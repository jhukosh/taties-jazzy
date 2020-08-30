<template>
  <div class="main">
    <p>Master class page</p>
    <p>{{ masterClasses }}</p>
    <EventDateComponent />
    <EventComponent :parentData="masterClasses" />
  </div>
</template>

<script>
import { firebaseService } from "@/core/services/firebase-service.js";
import EventComponent from "@/app/shared/components/event-component/event-component.vue";

export default {
  name: "MasterClassesPage",
  mixins: [firebaseService],
  components: {
    EventComponent,
  },
  data() {
    return {
      masterClasses: {},
    };
  },
  methods: {
    async getShowsToDisplay() {
      this.getAllMasterClasses().then((res) => {
        this.masterClasses = res;
        console.log(this.masterClasses);
      });
    },
  },
  beforeMount() {
    this.getShowsToDisplay();
  },
};
</script>
