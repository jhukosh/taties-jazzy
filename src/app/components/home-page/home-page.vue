<template>
    <div>
        <div class="home-band">
          <HomeBand />
        </div>
        <OpeningComponent class="home-opening" />
        <div class="main-event">
          <h3 class="main-event-title">Programmation</h3>
        </div>
        <EventComponent :parentData="homeShow"/>
        <BackgroundedInfosComponent :parentData="'circle'"/>
        <JoinComponent />
        <BackgroundedInfosComponent :parentData="'trumpet'"/>
        <div class="home-social-media">
          <h4>Retrouvez nous sur les <span class="home-social-media-text">réseaux sociaux</span> !</h4>
          <div class="home-social-media-icons">
            <img src="@/assets/social-media/instagram.png" alt="Logo Instagram"/>
            <img src="@/assets/social-media/facebook.png" alt="Logo Facebook"/>
          </div>
          <div class="home-img-gallery">
            <img src="@/assets/gallery-1.jpg" alt=""/>
            <img src="@/assets/gallery-2.jpg" alt=""/>
            <img src="@/assets/gallery-3.jpg" alt=""/>
            <img src="@/assets/gallery-4.jpg" alt=""/>
          </div>
        </div>
    </div>
</template>
<script>
  import HomeBand from '@/app/components/home-page/components/home-band-component/home-band-component.vue'
  import OpeningComponent from '@/app/components/home-page/components/opening-component/opening-component.vue'
  import JoinComponent from '@/app/components/home-page/components/join-component/join-component.vue'
  import EventComponent from '@/app/shared/components/event-component/event-component.vue'
  import BackgroundedInfosComponent from '@/app/shared/components/backgrounded-infos-component/backgrounded-infos-component.vue'
  import { firebaseService } from '@/core/services/firebase-service.js'

  export default {
    name: 'Home',
    mixins: [firebaseService],
    components: {
      HomeBand,
      EventComponent,
      BackgroundedInfosComponent,
      JoinComponent,
      OpeningComponent
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
