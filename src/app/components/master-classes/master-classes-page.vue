<template>
    <div>
        <p>Master class page</p>
        <p>{{ masterClasses }}</p>
    </div>
</template>

<script>
import { firebaseService } from '@/core/services/firebase-service.js'
export default {
    name: 'MasterClassesPage',
    mixins: [firebaseService],
    data() {
        return {
            masterClasses: []
        }
    },
    methods: {
        getEvent() {
            console.log('result', this.masterClasses)
        },
        async getEventsTest() {
            this.getEvents().then( res => {
                this.masterClasses = res.filter( masterClass => masterClass.type === "masterclass")
            })
        }
    },
    beforeMount() {
        this.getEventsTest()
    }
}
</script>
