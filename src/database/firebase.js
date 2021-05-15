import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyATGVgUqLs57Y9uP0H4sJA56sffl84RkO4',
  authDomain: 'myevent-7c1da.firebaseapp.com',
  projectId: 'myevent-7c1da',
  storageBucket: 'myevent-7c1da.appspot.com',
  messagingSenderId: '65347244071',
  appId: '1:65347244071:web:cbef32059f6deb13ebbe02'
}

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const db = firebase.firestore()

export default {
  firebase,
  auth,
  db
}
