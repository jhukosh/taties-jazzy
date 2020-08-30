<template>
  <div id="Event-home-date-component">
    <div v-if="event" class="event-home-date-infos">
      <p class="event-home-date-type">{{ type === "show" ? 'Concert' : event.title }}</p>
      <h4 class="event-home-date">{{ event.date }}</h4>
    </div>
    <hr v-if="event" class="event-home-date-separator" />
  </div>
</template>
<script>
export default {
  name: "EventHomeDateComponent",
  props: ['event', 'type']
};
</script>
<style lang="scss" scoped>
@import "event-home-date-component.scss";
</style>