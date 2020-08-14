<template>
    <div class="main">
        <AssociationBanner/>
        <AboutUs/>
        <JazzLove/>
        <Founder/>

    </div>
</template>

<script>
    import AssociationBanner from '@/app/components/association-page/components/association-banner-component/association-banner-component.vue'
    import AboutUs from '@/app/components/association-page/components/about-us-component/about-us-component.vue'
    import JazzLove from '@/app/components/association-page/components/jazz-love-component/jazz-love-component.vue'
    import Founder from '@/app/components/association-page/components/founder-component/founder-component.vue'
    export default {
        name: 'Association',
        components: {
            AssociationBanner,
            AboutUs,
            JazzLove,
            Founder,
        },
    }
</script>

<style lang="scss">
    @import "association-page.scss";
</style>