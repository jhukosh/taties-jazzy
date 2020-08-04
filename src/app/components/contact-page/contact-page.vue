<template>
    <div class="main">
        <p>Contact page bitch</p>
        <ContactFormComponent />
        <MapComponent />
    </div>
</template>

<script>
    import ContactFormComponent from '@/app/components/contact-page/components/contact-form-component/contact-form-component.vue'
    import MapComponent from '@/app/components/contact-page/components/map-component/map-component.vue'
    export default {
        name: 'ContactPage',
        components: { ContactFormComponent, MapComponent }
    }
</script>
