<template>
    <div class="main">
        <AssociationBanner/>
        <AboutUs/>
        <JazzLove/>

    </div>
</template>

<script>
    import AssociationBanner from '@/app/components/association-page/components/association-banner-component/association-banner-component.vue'
    import AboutUs from '@/app/components/association-page/components/about-us-component/about-us-component.vue'
    import JazzLove from '@/app/components/association-page/components/jazz-love-component/jazz-love-component.vue'
    export default {
        name: 'Association',
        components: {
            AssociationBanner,
            AboutUs,
            JazzLove,
    },
    }
</script>

<style lang="scss">
    @import "association-page.scss";
</style>