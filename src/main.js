import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { config } from '../firebaseConfig'

Vue.config.productionTip = false

const config = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
}

firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
