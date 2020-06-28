import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyB7fPlUiZx5LwYvSJea3mg456yl2llZzqY",
  authDomain: "taties-jazzy.firebaseapp.com",
  databaseURL: "https://taties-jazzy.firebaseio.com",
  projectId: "taties-jazzy",
  storageBucket: "taties-jazzy.appspot.com",
  messagingSenderId: "506211563747",
  appId: "1:506211563747:web:5e1cdd6ad2f31038b52dd6",
  measurementId: "G-LRHXV2FZQE"
}

firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
