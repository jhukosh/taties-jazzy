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
          picture: '',
          type: 'public'
        },
        {
          title: 'Adhérents',
          price: '10€/',
          picture: '',
          type: 'member',
          bonus: ' +4 places gratuites'
        },
        {
          title: 'Jeunes (-30 ans)',
          picture: '',
          price: '12€',
          type: 'young'
        },
        {
          title: 'Enfants (-12ans)',
          picture: '',
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
