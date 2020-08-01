import firebase from 'firebase'
const db = firebase.firestore()

export const firebaseService = {
    methods: {
        getEvents: () => new Promise((resolve, reject) => {
            const result = []
            db.collection("events").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                result.push(doc.data())
                });
                resolve(result);
                reject('No event found in databse');
            })
        }),
        getHomeEvents: () => new Promise((resolve, reject) => {
            const result = []
            db.collection("home-events").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    result.push(doc.data())
                });
                resolve(result);
                reject('No home event found in database');
            })
        })
        /*saveNewEvent: (newEvent) => new Promise((resolve, reject) => {
            db.collection("events").add(newEvent)
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        })*/
    }
}
