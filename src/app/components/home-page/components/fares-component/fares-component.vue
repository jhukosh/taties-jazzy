<template>
  <div id="Fares-component">
    <div class="cards-container">
      <div class="cards" v-for="(fare, index) in fares" :key="index">
        <FareCardComponent
          :title="fare.title"
          :price="fare.price"
          :bonus="fare.bonus"
          :picture="fare.picture"
          :class="index !== indexToDisplay ? 'undisplayCard': ''"
        />
        <div
          class="change-card-displayed-btn"
          :style="index !== indexToDisplay ? 'display: none': 'display: flex'"
        >
          <img
            src="@/assets/arrow.png"
            alt
            id="Left-arrow"
            @click="changeCardDisplayed(index, -1)"
            :style="indexToDisplay === 0 ? 'opacity: 0.2': 'opacity: 1'"
          >
          <span>{{ `${index + 1}/4` }}</span>
          <img
            src="@/assets/arrow.png"
            alt
            @click="changeCardDisplayed(index, 1)"
            :style="indexToDisplay === fares.length -1 ? 'opacity: 0.2': 'opacity: 1'"
          >
        </div>
      </div>
    </div>
    <div class="fares-infos-container">
      <p>
        <span>Réservez</span> votre billet maintenant et
      </p>
      <p>
        obtenez
        <span>10% de rabais !!!</span>
      </p>
      <button class="black-button black-button-txt">RÉSERVER MON BILLET</button>
    </div>
  </div>
</template>
<script>
import FareCardComponent from "@/app/components/home-page/components/fares-component/fare-card-component/fare-card-component.vue";
export default {
  name: "FaresComponent",
  components: {
    FareCardComponent
  },
  data() {
    return {
      fares: [
        {
          title: "Public visiteur",
          price: "15€",
          picture: require("@/assets/home-fares-assets/fare-1.jpg"),
          type: "public"
        },
        {
          title: "Adhérents",
          price: "10€/",
          picture: require("@/assets/home-fares-assets/fare-2.jpg"),
          type: "member",
          bonus: " +4 places gratuites"
        },
        {
          title: "Jeunes (-30 ans)",
          picture: require("@/assets/home-fares-assets/fare-3.jpg"),
          price: "12€",
          type: "young"
        },
        {
          title: "Enfants (-12ans)",
          picture: require("@/assets/home-fares-assets/fare-4.jpg"),
          price: "Gratuit",
          type: "children"
        }
      ],
      indexToDisplay: 0
    };
  },
  methods: {
    changeCardDisplayed(index, incrementation) {
      if (
        (index >= this.fares.length - 1 && incrementation === 1) ||
        (index <= 0 && incrementation === -1)
      ) {
        return;
      }
      this.indexToDisplay += incrementation;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "fares-component.scss";
</style>
