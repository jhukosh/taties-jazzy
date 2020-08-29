<template>
  <div class="offer-card">
    <p class="offer-subtitle">Tarif</p>
    <h4>
      {{ title }}
    </h4>
    <p class="offer-price">
      {{ price }}
      <span> {{ bonus }} </span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'OfferCardComponent',
  props: ['title', 'price', 'bonus']
}
</script>
<style lang="scss" scoped>
  @import 'offer-card-component.scss';
</style>

