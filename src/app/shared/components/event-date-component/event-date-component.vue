<template>
  <div id="Event-date-component">
    <h4 class="strawberry-text">{{ date }} •</h4>
    <div class="black-horizontal-separator"></div>
  </div>
</template>

<script>
export default {
  name: "EventDateComponent",
  props: ["date"],
};
</script>

<style lang="scss">
@import "event-date-component.scss";
</style>