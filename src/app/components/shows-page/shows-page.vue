<template>
    <div class="main">
        <p>Shows page</p>
        <p>{{ shows }}</p>
        <button @click="getEvent">Click me</button>
        <EventComponent />
    </div>
</template>

<script>
import { firebaseService } from '@/core/services/firebase-service.js'
import EventComponent from '@/app/shared/components/event-component/event-component.vue'

export default {
    name: 'ShowsPage',
    components: {
        EventComponent
    },
    mixins: [firebaseService],
    data() {
        return {
            shows: []
        }
    },
    methods: {
        getEvent() {
            console.log('result', this.shows)
        },
        async getEventsTest() {
            this.getEvents().then( res => {
                this.shows = res.filter( show => show.type === "show")
            })
        }
    },
    mounted() {
        this.getEventsTest()
    }
}
</script>
