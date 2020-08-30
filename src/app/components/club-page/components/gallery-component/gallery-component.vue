<template>
  <div id="Gallery-component">
    <div id="Gallery-left-container">
      <div class="bebe" v-for="(item, index) in 4" :key="item">
        <img :src="require(`@/assets/club-page-assets/gallery-component/img-left${index+1}.png`)" />
      </div>
    </div>

    <div id="Gallery-right-container">
      <div class="gallery-right-container-images" v-for="(item, index) in 7" :key="item">
        <img :src="require(`@/assets/club-page-assets/gallery-component/img-right${index+1}.png`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
};
</script>

<style lang="scss">
@import "gallery-component.scss";
</style>