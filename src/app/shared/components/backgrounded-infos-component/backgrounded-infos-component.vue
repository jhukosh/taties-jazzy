<template>
<div class="background">
  <!-- Backgrounded component with circle icon -->
  <div v-if="parentData === 'circle'" class="home-circle-version">
    <div class="img-part">
      <img src="@/assets/members.jpg" />
    </div>
    <div class="text-part">
      <h3>DEVENEZ ADHÉRENT</h3>
      <h4>&amp; profitez de nombreux <span>avantages</span> !</h4>
      <ul class="members-list">
        <li><span class="check-icon"></span><span class="list-text">Bons plans</span></li>
        <li><span class="check-icon"></span><span class="list-text">4 places "Découverte" gratuites</span></li>
        <li><span class="check-icon"></span><span class="list-text">Réductions sur tous les concerts</span></li>
      </ul>
    </div>
    <img src="@/assets/circle.png" class="circle-icon">
  </div>

  <!-- Backgrounded component with trumpet icon -->
  <div v-if="parentData === 'trumpet'" class="home-trumpet-version">
    <img src="@/assets/trumpet.png" class="trumpet-icon">
    <div class="text-part">
      <h3>Des Fous de Jazz</h3>
      <p class="text-part-paragrah">
        Le projet des Taties Jazzy est de proposer un 
        endroit et des conditions appropriées aux artistes passionnés de Jazz.
      </p>
      <p class="text-part-paragrah">
        Le but est qu'ils puissent se produire et offrir une performance de 
        qualité, dans un cadre idéal pour les amateurs de Jazz. Les afficionados 
        du genre pourront venir apprécier des artistes reconnus et découvrir 
        des nouveaux talents dans un cadre dédié.
      </p>
      <div>
        <button class="black-button  black-button-txt">VOIR PLUS</button>
      </div>
    </div>
    <div class="img-part">
      <img src="@/assets/members2.jpg" />
    </div>
  </div>

  <!-- Backgrounded component with circle icon for association page -->
  <div v-if="parentData === 'association-page'">
    <img src="@/assets/circle.png" class="circle-icon">
  </div>
</div>
</template>
<script>
export default {
  name:'BackgroundedInfosComponent',
  props: ['parentData']
}
</script>

<style lang="scss" scoped>
@import 'backgrounded-infos-component.scss';

</style>

