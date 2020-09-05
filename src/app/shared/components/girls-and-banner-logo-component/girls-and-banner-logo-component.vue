<template>
    <div class="girls-and-banner-logo">
        <img src="@/assets/logotj.png" alt="" id="girls-logo">
        <img src="@/assets/logo515copy.png" alt="" id="banner-logo" :style="`margin-top: ${bannerMarginTop}`">
    </div>
</template>
<script>
    export default {
        name: 'GirlsAndBannerLogoComponent',
        props: ['bannerMarginTop']
    }
</script>
<style lang="scss">
    @import "girls-and-banner-logo-component.scss";
</style>
