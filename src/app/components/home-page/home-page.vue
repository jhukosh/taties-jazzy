<template>
    <div>
        <HomeBand />
        <EventComponent />
    </div>
</template>
<script>
  import HomeBand from '@/app/components/home-page/components/home-band-component/home-band-component.vue'
  import EventComponent from '@/app/shared/components/event-component/event-component.vue'

  export default {
    name: 'Home',
    components: {
      HomeBand,
      EventComponent
    }
  }
</script>