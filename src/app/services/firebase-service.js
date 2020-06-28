import firebase from 'firebase'

const db = firebase.firestore()
const eventsCollection = db.collection('events')
const getEvents = () => {
    console.log('test service')
    return eventsCollection.get()
}

export default {
    getEvents
}
