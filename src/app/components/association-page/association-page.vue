<template>
    <div id="Association-page-component">
        <TitleBackgroundComponent :background_image="path_to_image" :background_title="background_title_value" />
        <TatiesTitleComponent :subtitle="title.subtitle_value" :title="title.about_us_title" />
        <AboutUsComponent />
        <JazzLoveComponent />
        <TatiesTitleComponent :subtitle="title.subtitle_value" :title="title.founder_title" />
        <FounderComponent />
        <IntimistPlaceComponent />
        <div id="Staff-container">
            <TatiesTitleComponent :subtitle="title.subtitle_value" :title="title.staff_title"/>
            <StaffComponent />
        </div>
        <BookTicketButtonComponent />
    </div>
</template>

<script>
    import TitleBackgroundComponent from '@/app/shared/components/title-background-component/title-background-component.vue'
    import AboutUsComponent from '@/app/components/association-page/components/about-us-component/about-us-component.vue'
    import JazzLoveComponent from '@/app/components/association-page/components/jazz-love-component/jazz-love-component.vue'
    import FounderComponent from '@/app/components/association-page/components/founder-component/founder-component.vue'
    import IntimistPlaceComponent from '@/app/components/association-page/components/intimist-place-component/intimist-place-component.vue'
    import StaffComponent from '@/app/components/association-page/components/staff-component/staff-component.vue'
    import TatiesTitleComponent from '@/app/shared/components/taties-title-component/taties-title-component.vue'
    import BookTicketButtonComponent from '@/app/shared/components/book-ticket-button-component/book-ticket-button-component.vue'

    export default {
        name: 'Association',
        components: {
            TitleBackgroundComponent,
            AboutUsComponent,
            JazzLoveComponent,
            FounderComponent,
            IntimistPlaceComponent,
            StaffComponent,
            TatiesTitleComponent,
            BookTicketButtonComponent
        },
        data: () => {
            return {
                // Contain value for all title in association page
                title: {
                    about_us_title: 'Qui sommes-nous ?',
                    founder_title: 'Deux fondatrices pour une passion',
                    staff_title: 'Des passionnés au bureau',
                    subtitle_value: 'Les Taties Jazzy'
                },
                // Contain value for banner image and title value
                path_to_image : 'association-page-assets/association-banner.jpg',
                background_title_value : 'L’association'
            }
        }
    }
</script>

<style lang="scss">
    @import "association-page.scss";
</style>