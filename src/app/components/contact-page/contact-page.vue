<template>
    <div id="Contact-page-component">
        <TitleBackgroundComponent :background_image="path_to_image" :background_title="background_title_value"/>
        <ContactFormComponent />
        <MapComponent />
    </div>
</template>

<script>
    import ContactFormComponent from '@/app/components/contact-page/components/contact-form-component/contact-form-component.vue'
    import MapComponent from '@/app/components/contact-page/components/map-component/map-component.vue'
    import TitleBackgroundComponent from '../../shared/components/title-background-component/title-background-component.vue'
    
    export default {
        name: 'ContactPage',
        components: { 
            ContactFormComponent, 
            MapComponent,
            TitleBackgroundComponent 
            },
        data: () => {
            return {
                path_to_image : 'contact-page-assets/contact-banner.png',
                background_title_value : 'Contact'
            }
        }
    }
</script>

<style lang="scss">
    @import "contact-page.scss";
</style>