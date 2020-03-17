import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyALKAqpBcSaHkpsdQVs4RMsmPSrfe85rbA",
  authDomain: "shouldiquarantine.firebaseapp.com",
  databaseURL: "https://shouldiquarantine.firebaseio.com",
  projectId: "shouldiquarantine",
  storageBucket: "shouldiquarantine.appspot.com",
  messagingSenderId: "306632367314",
  appId: "1:306632367314:web:b7658806b56bacb52ae10b"
};
// Initialize Firebase

document.addEventListener('DOMContentLoaded', function() {
  window.firebase.initializeApp(firebaseConfig);

  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  window.firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode +" "+ errorMessage)
  });
  
  window.firebase.auth().onAuthStateChanged(user => { 
    console.log(user)
   });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

});


new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
