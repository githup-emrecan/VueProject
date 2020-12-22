import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import "firebase/auth";

if (!firebase.apps.length) {
    const config = {
    apiKey: "AIzaSyDrvJmLNCDeJ6vHXKcNdZYgg_QWHrGgB0k",
    authDomain: "vuecoffemania.firebaseapp.com",
    databaseURL: "https://vuecoffemania-default-rtdb.firebaseio.com",
    projectId: "vuecoffemania",
    storageBucket: "vuecoffemania.appspot.com",
    messagingSenderId: "997461183138",
    appId: "1:997461183138:web:96b03f627109fb2aab65fb",
    measurementId: "G-YCBZ5G91QZ"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
const fireData = firebase.database()
const fireAuth = firebase.auth()
export {fireDb,fireData,fireAuth}