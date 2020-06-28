<template>
    <div>
        <p>Shows page</p>
        <p>{{ shows }}</p>
        <button @click="getEvent">Click me</button>
    </div>
</template>

<script>
import { firebaseService } from '@/app/services/firebase-service.js'
export default {
    name: 'ShowsPage',
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