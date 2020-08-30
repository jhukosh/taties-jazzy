import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import firebase from 'firebase/app'
import 'setimmediate';
//import { config } from '../firebaseConfig'

Vue.config.productionTip = false

//firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
