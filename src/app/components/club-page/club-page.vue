<template>
  <div id="Club-page-container">
    <TitleBackgroundComponent
      :background_image="path_to_image"
      :background_title="background_title_value"
    />
    <TatiesTitle :subtitle="subtitle_value" :title="about_us_title.name"/>
    <InfoComponent/>
    <GalleryComponent/>
  </div>
</template>

<script>
import TitleBackgroundComponent from "@/app/shared/components/title-background-component/title-background-component.vue";
import TatiesTitle from "@/app/shared/components/taties-title-component/taties-title-component.vue";
import InfoComponent from "@/app/components/club-page/components/infos-component/infos-component.vue";
import GalleryComponent from "@/app/components/club-page/components/gallery-component/gallery-component.vue";

export default {
  name: "ClubPageComponent",
  components: {
    TitleBackgroundComponent,
    TatiesTitle,
    InfoComponent,
    GalleryComponent
  },
  data: () => {
    return {
      about_us_title: {
        name: `Qu'est ce que c'est ?`
      },
      subtitle_value: `Le club 'R'`,
      path_to_image: "club-page-assets/club-page-banner.png",
      background_title_value: "Le Club"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "club-page.scss";
</style>