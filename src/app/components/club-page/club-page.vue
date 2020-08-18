<template>
      <div class="club-page-main">
        <HeaderClub/>
        <InfoComponent/>  
        <GalleryComponent/>
    </div>
</template>

<script>
    import HeaderClub from '@/app/components/club-page/components/header/header-component.vue'
    import InfoComponent from '@/app/components/club-page/components/infos-component/infos-component.vue'
    import GalleryComponent from '@/app/components/club-page/components/gallery-component/gallery-component.vue'

    export default {
        name: 'Header',
        components: {
            HeaderClub, 
            InfoComponent,
            GalleryComponent
        },
    }
</script>

<style>
</style>
