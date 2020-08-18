<template>
    <div id="Association-main">
        <AssociationBanner/>
        <TatiesTitle :subtitle="subtitle_value" :title="about_us_title.name"/>
        <AboutUs/>
        <JazzLove/>
        <TatiesTitle :subtitle="subtitle_value" :title="founder_title.name"/>
        <Founder/>
        <IntimistPlace/>
        <div id="Staff-container">
            <TatiesTitle :subtitle="subtitle_value" :title="staff_title.name"/>
            <Staff/>
        </div>
    </div>
</template>

<script>
    import AssociationBanner from '@/app/components/association-page/components/association-banner-component/association-banner-component.vue'
    import AboutUs from '@/app/components/association-page/components/about-us-component/about-us-component.vue'
    import JazzLove from '@/app/components/association-page/components/jazz-love-component/jazz-love-component.vue'
    import Founder from '@/app/components/association-page/components/founder-component/founder-component.vue'
    import IntimistPlace from '@/app/components/association-page/components/intimist-place-component/intimist-place-component.vue'
    import Staff from '@/app/components/association-page/components/staff-component/staff-component.vue'
    import TatiesTitle from '@/app/shared/components/taties-title-component/taties-title-component.vue'
    
    export default {
        name: 'Association',
        components: {
            AssociationBanner,
            AboutUs,
            JazzLove,
            Founder,
            IntimistPlace,
            Staff,
            TatiesTitle 
        },
        data: () => {
            return {
                // Contain value for all title in association page
                about_us_title: {
                    name: 'Qui sommes-nous ?',
                },
                founder_title: {
                    name: 'Deux fondatrices pour une passion',
                },
                staff_title: {
                    name: 'Des passionnés au bureau',
                },
                subtitle_value: 'Les Taties Jazzy'
            }
        }
    }
</script>

<style lang="scss">
    @import "association-page.scss";
</style>