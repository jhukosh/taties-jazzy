<template>
<div class="background">
  <div v-if="parentData === 'disk'">
    <img src="@/assets/members2.jpg" />
    <div class="text-part">
      <h3>DEVENEZ ADHÉRENT</h3>
      <h4>&amp; profitez de nombreux <span>avantages</span> !</h4>
    </div>
    <img src="@/assets/circle.png" class="circle-icon">
  </div>
  <div v-if="parentData === 'trumpet'" class="second-version">
    <img src="@/assets/trumpet.png" class="trumpet-icon">
    <div class="text-part">
      <h3>Des Fous de Jazz</h3>
      <p>
        Le projet des Taties Jazzy est de proposer un 
        endroit et des conditions appropriées aux artistes passionnés de Jazz.
      </p>
      <p>
        Le but est qu'ils puissent se produire et offrir une performance de 
        qualité, dans un cadre idéal pour les amateurs de Jazz. Les afficionados 
        du genre pourront venir apprécier des artistes reconnus et découvrir 
        des nouveaux talents dans un cadre dédié.
      </p>
      
    </div>
    <div class="img-part">
      <img src="@/assets/members2.jpg" />
    </div>
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

