<template>
  <div class="fare-card">
    <img :src="picture" alt="" class="fare-card-img" />
    <div class="fare-card-infos">
    <p class="fare-card-subtitle">Tarif</p>
    <h4>
      {{ title }}
    </h4>
    <p class="fare-card-price">
      {{ price }}
      <span class="fare-card-price-bonus"> {{ bonus }} </span>
    </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FareCardComponent',
  props: ['title', 'price', 'bonus', 'picture']
}
</script>
<style lang="scss" scoped>
  @import 'fare-card-component.scss';
</style>
