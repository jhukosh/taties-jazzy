import firebase from 'firebase'

const db = firebase.firestore()
const getEvents = () => {
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

export {
    getEvents
}
