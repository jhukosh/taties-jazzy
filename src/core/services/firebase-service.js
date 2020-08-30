import firebase from 'firebase'
const db = firebase.firestore()

export const firebaseService = {
  methods: {
    getAllShows: () => new Promise((resolve, reject) => {
      const result = []
      db.collection("shows").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          result.push(doc.data())
        });
        resolve(result);
        reject('No event found in database');
      })
    }),
    getAllMasterClasses: () => new Promise((resolve, reject) => {
      const result = []
      db.collection("masterclasses").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          result.push(doc.data())
        });
        resolve(result);
        reject('No event found in database');
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
    }),
    getShowById: (eventId) => new Promise((resolve, reject) => {
      db.collection("shows").doc(eventId).get().then( show => {
        const result = show.data()
        resolve(result);
        reject('No home event found in database');
      })
    }),
    getMasterClassById: (eventId) => new Promise((resolve, reject) => {
      db.collection("masterclasses").doc(eventId).get().then( masterclass => {
        const result = masterclass.data()
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
