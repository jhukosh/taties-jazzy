<template>
<div id="offers-component">
  <div 
    class="cards"
    v-for="fare in fares" 
    :key="fare.type"
  >
  <OfferCardComponent  
    :title="fare.title" 
    :price="fare.price"
    :bonus="fare.bonus"
    :picture="fare.picture"
  />
  </div>
</div>
</template>
<script>
import OfferCardComponent from '@/app/components/home-page/components/offers-component/offer-card-component/offer-card-component.vue'
export default {
  name:'OffersComponent',
  components: {
    OfferCardComponent
  },
  data () {
    return {
      fares: [
        {
          title: 'Public visiteur',
          price: '15€',
          picture: require('@/assets/home-fares-assets/fare-1.jpg'),
          type: 'public'
        },
        {
          title: 'Adhérents',
          price: '10€/',
          picture: require('@/assets/home-fares-assets/fare-1.jpg'),
          type: 'member',
          bonus: ' +4 places gratuites'
        },
        {
          title: 'Jeunes (-30 ans)',
          picture: require('@/assets/home-fares-assets/fare-3.jpg'),
          price: '12€',
          type: 'young'
        },
        {
          title: 'Enfants (-12ans)',
          picture: require('@/assets/home-fares-assets/fare-4.jpg'),
          price: 'Gratuit',
          type: 'children'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'offers-component.scss';
</style>
