<template>
    <div>
        <div class="home-band">
          <HomeBand />
        </div>
        <div class="main-event">
          <h3 class="main-event-title">Programmation</h3>
        </div>
        <EventComponent :parentData="homeShow"/>
        <BackgroundedInfosComponent :parentData="'circle'"/>
        <BackgroundedInfosComponent :parentData="'trumpet'"/>
    </div>
</template>
<script>
  import HomeBand from '@/app/components/home-page/components/home-band-component/home-band-component.vue'
  import EventComponent from '@/app/shared/components/event-component/event-component.vue'
  import BackgroundedInfosComponent from '@/app/shared/components/backgrounded-infos-component/backgrounded-infos-component.vue'
  import { firebaseService } from '@/core/services/firebase-service.js'

  export default {
    name: 'Home',
    mixins: [firebaseService],
    components: {
      HomeBand,
      EventComponent,
      BackgroundedInfosComponent
    },
    data() {
      return {
        homeShow: {},
        homeClass: {}
      }
    },
    methods: {
      async getHomeEventsFromFirebase() {
        this.getHomeEvents().then( res => {
            this.homeShow = res.filter( show => show.type === "show")[0];
        })
      }
    },
    mounted() {
        this.getHomeEventsFromFirebase()
    }
}
</script>
<style lang="scss">
  @import "home-page.scss";
</style>
