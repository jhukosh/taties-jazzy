<template>
    <div class="main">
        <AssociationBanner/>
        <AboutUs/>

    </div>
</template>

<script>
    import AssociationBanner from '@/app/components/association-page/components/association-banner-component/association-banner-component.vue'
    import AboutUs from '@/app/components/association-page/components/about-us-component/about-us-component.vue'
    export default {
        name: 'Association',
        components: {
            AssociationBanner,
            AboutUs,
    },
    }
</script>

<style lang="scss">
    @import "association-page.scss";
</style>