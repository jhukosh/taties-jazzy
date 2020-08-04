<template>
    <div class="home-background">
        <img src="@/assets/jazzy.png" alt="" id="jazzy"/>
        <GirlsAndBannerLogoComponent id="home-band-main-logo"/>
        <img src="@/assets/asso.png" alt="" id="asso"/>
    </div>
</template>

<script>
    import GirlsAndBannerLogoComponent from '@/app/shared/components/girls-and-banner-logo-component/girls-and-banner-logo-component.vue'
    export default {
        name: 'HomeBand',
        components: {
            GirlsAndBannerLogoComponent
        }
    }
</script>

<style lang="scss">
  @import "home-band-component.scss";
</style>