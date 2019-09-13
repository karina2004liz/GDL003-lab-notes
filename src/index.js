import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Start from './Start'
//import firebase from 'firebase';


/* firebase.initializeApp({
    apiKey: "AIzaSyCJQg7CG7ZOGa3_95qwdAl08lZs22v7uiE",
    authDomain: "notesinreact.firebaseapp.com",
    databaseURL: "https://notesinreact.firebaseio.com",
    projectId: "notesinreact",
    storageBucket: "",
    messagingSenderId: "328441495789",
    appId: "1:328441495789:web:1c7f336517167d03"
})


*/

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
