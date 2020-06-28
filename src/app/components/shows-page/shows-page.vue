<template>
    <div>
        <p>Shows page</p>
        <p>{{ event}}</p>
        <button v-on:click="getEvent">Click me</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'shows-page',
    data () {
        return {
            event: ''
        }
    },
    methods: {
      getEvent: function () {
          const db = firebase.firestore()
          db.collection("events").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
    });
});
      }
    }
}
</script>