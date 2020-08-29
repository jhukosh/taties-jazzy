<template>
<div id="Offers-component">
  <img src="@/assets/reversed-trumpet.png" alt="" class="offers-trumpet-icon"/>
  <div class="offers-content">
    <div class="offers-content-img">
      <img :src="picture" alt="" />
    </div>
    <div class="offers-content-infos">
      <h4>{{ title }}</h4>
      <p>
        <strong>{{ firstParagraphStart }}</strong>
        {{ firstParagraph1 }}
        <strong>{{ clubName }}</strong>
        {{ firstParagraph2 }}
        <strong>{{ firstParagraph3 }}</strong>
      </p>
      <p class="offers-content-infos-second-paragraph">{{ secondParagraph }} <span>{{ secondParagraphEnd }}</span></p>
      <div>
        <button class="black-button  black-button-txt">VOIR PLUS</button>
      </div>
    </div>
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
      firstParagraph1: "vous accueillent chez Smain au",
      clubName: "'R' club",
      firstParagraph2: ", dans un cadre chaleureux et atypique où vous pourrez voir se produire des",
      firstParagraph3: "artistes talentueux",
      secondParagraph: "Tous les vendredis et samedis soirs, de 19h jusqu'au bout de la nuit",
      secondParagraphEnd: "(Enfin... 00h30, c'est déjà pas mal !)"
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'offers-component.scss';
</style>
