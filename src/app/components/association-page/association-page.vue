<template>
    <div id="Association-page-component">
        <AssociationBannerComponent/>
        <TatiesTitleComponent :subtitle="subtitle_value" :title="about_us_title.name"/>
        <AboutUsComponent/>
        <JazzLoveComponent/>
        <TatiesTitleComponent :subtitle="subtitle_value" :title="founder_title.name"/>
        <FounderComponent/>
        <IntimistPlaceComponent/>
        <div id="Staff-container">
            <TatiesTitleComponent :subtitle="subtitle_value" :title="staff_title.name"/>
            <StaffComponent/>
        </div>
    </div>
</template>

<script>
    import AssociationBannerComponent from '@/app/components/association-page/components/association-banner-component/association-banner-component.vue'
    import AboutUsComponent from '@/app/components/association-page/components/about-us-component/about-us-component.vue'
    import JazzLoveComponent from '@/app/components/association-page/components/jazz-love-component/jazz-love-component.vue'
    import FounderComponent from '@/app/components/association-page/components/founder-component/founder-component.vue'
    import IntimistPlaceComponent from '@/app/components/association-page/components/intimist-place-component/intimist-place-component.vue'
    import StaffComponent from '@/app/components/association-page/components/staff-component/staff-component.vue'
    import TatiesTitleComponent from '@/app/shared/components/taties-title-component/taties-title-component.vue'
    
    export default {
        name: 'Association',
        components: {
            AssociationBannerComponent,
            AboutUsComponent,
            JazzLoveComponent,
            FounderComponent,
            IntimistPlaceComponent,
            StaffComponent,
            TatiesTitleComponent
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