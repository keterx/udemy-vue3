import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCa8sui9mktGN185FIZ77LvU17A6EQ0jS8',
  authDomain: 'music-bcb52.firebaseapp.com',
  projectId: 'music-bcb52',
  storageBucket: 'music-bcb52.appspot.com',
  messagingSenderId: '742375948668',
  appId: '1:742375948668:web:2ac9b2ae97ff2ffda564f9'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
