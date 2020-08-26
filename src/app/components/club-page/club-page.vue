<template>
      <div class="club-page-main">
        <Header/>
        <TatiesTitle :subtitle="subtitle_value" :title="about_us_title.name"/>
        <InfoComponent/>  
        <GalleryComponent/>   
    </div>
</template>

<script>
    import Header from '@/app/components/club-page/components/header/header-component.vue'
    import TatiesTitle from '@/app/shared/components/taties-title-component/taties-title-component.vue'
    import InfoComponent from '@/app/components/club-page/components/infos-component/infos-component.vue'
    import GalleryComponent from '@/app/components/club-page/components/gallery-component/gallery-component.vue'

    export default {
        name: 'Club-page',
        components: {
            Header,
            TatiesTitle, 
            InfoComponent,
            GalleryComponent
        },
        data: () => {
            return {
                // Contain value for all title in association page
                about_us_title: {
                    name: `Qu'est ce que c'est?`,
                },
                subtitle_value: `Le club 'R'`,
            }
        }
    }
</script>

<style>
</style>
