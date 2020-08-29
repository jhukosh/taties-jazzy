<template>
    <div id="Show-page-component">
        <TitleBackgroundComponent :background_image="path_to_image" :background_title="background_title_value" />

        <div id="Show-page-container">
            <div class="show-item" v-for="show in shows" :key="show.id">
                <EventDateComponent />
                <EventComponent :parentData="show"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import { firebaseService } from '@/core/services/firebase-service.js'
import TitleBackgroundComponent from '../../shared/components/title-background-component/title-background-component.vue'
import EventComponent from '@/app/shared/components/event-component/event-component.vue'
import EventDateComponent from '@/app/shared/components/event-date-component/event-date-component.vue'

export default {
    name: 'ShowsPage',
    components: {
        TitleBackgroundComponent,
        EventComponent, 
        EventDateComponent
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
        async getEventsTest() {
            this.getEvents().then( res => {
                this.shows = res.filter( show => show.type === "show");
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
