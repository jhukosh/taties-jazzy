<template>
<div id="offers-component">
  <div>
    <img :src="picture" alt="" />
  </div>
  <div>
    <h4>{{ title }}</h4>
    <p><strong>{{ firstParagraphStart }}</strong>{{ firstParagraph }}</p>
    <p>{{ secondParagraph }} <span>{{ secondParagraphEnd }}</span></p>
  </div>
</div>
</template>
<script>
export default {
  name:'OffersComponent',
  data () {
    return {
      picture: require('@/assets/offers.jpg'),
      title: "Des concerts en folie",
      firstParagraphStart: "Les Taties Jazzy",
      firstParagraph: "vous accueillent chez Smain au 'R' club, dans un cadre chaleureux et atypique où vous pourrez voir se produire des artistes talentueux",
      secondParagraph: "Tous les vendredis et samedis soirs, de 19h jusqu'au bout de la nuit",
      secondParagraphEnd: "(Enfin... OOh30, c'est déjà pas mal !)"
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'offers-component.scss';
</style>
