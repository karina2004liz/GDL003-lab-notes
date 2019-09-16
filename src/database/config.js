import firebase from 'firebase';

 const config = {

    apiKey: "AIzaSyCJQg7CG7ZOGa3_95qwdAl08lZs22v7uiE",
    authDomain: "notesinreact.firebaseapp.com",
    databaseURL: "https://notesinreact.firebaseio.com",
    projectId: "notesinreact",
    storageBucket: "gs://notesinreact.appspot.com/",
    messagingSenderId: "328441495789",
    appId: "1:328441495789:web:1c7f336517167d03"

}

const fireConfig = firebase.initializeApp(config)

export default fireConfig;