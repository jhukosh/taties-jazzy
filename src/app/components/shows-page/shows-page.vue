<template>
    <div>
        <p>Shows page</p>
        <p>{{ event }}</p>
        <button v-on:click="getEvent">Click me</button>
    </div>
</template>

<script>
import { getEvents } from '@/app/services/firebase-service.js'
import firebase from 'firebase'

export default {
    name: 'shows-page',
    data() {
        return {
            event: []
        }
    },
    methods: {
      getEvent: () => {
          getEvents().then( res => console.log('res', res))
      }
    },
    beforeMount() {
            const db = firebase.firestore()
            const result = []
            db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().title}`);
            result.push(doc.data())
        });
        console.log(result);
        return result;
    })
    }
}
</script>