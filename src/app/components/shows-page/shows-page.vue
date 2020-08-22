<template>
    <div id="Show-page-component">
        <TitleBackgroundComponent :background_image="path_to_image" :background_title="background_title_value" />
        <div id="DEV">
            <p>Shows page</p>
            <p>{{ shows }}</p>
            <button @click="getEvent">Click me (show-page)</button>
        </div>

        <div id="Show-page-container">
            <EventComponent :parentData="shows"/>

        </div>
        
    </div>
</template>

<script>
import { firebaseService } from '@/core/services/firebase-service.js'
import TitleBackgroundComponent from '../../shared/components/title-background-component/title-background-component.vue'
import EventComponent from '@/app/shared/components/event-component/event-component.vue'

export default {
    name: 'ShowsPage',
    components: {
        TitleBackgroundComponent,
        EventComponent
    },
    mixins: [firebaseService],
    data() {
        return {
            shows: {},
            path_to_image : 'show-page-assets/show-banner.png',
            background_title_value : 'Concerts',
            title : {
                contact_title: 'Concert',
                subtitle_value: 'Les Taties Jazzy'
            }
        }
    },
    methods: {
        getEvent() {
            console.log('result', this.shows)
        },
        async getEventsTest() {
            this.getEvents().then( res => {
                this.shows = res.filter( show => show.type === "show")[0];
                console.log('SHOWS',this.shows)
            })
        }
    },
    mounted() {
        this.getEventsTest()
        console.log('Mounted in Page:', this.getEventsTest())
    }
}
</script>

<style lang="scss">
    @import "shows-page.scss";
</style>
