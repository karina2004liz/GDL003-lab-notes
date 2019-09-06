import React, {Component} from 'react';
import './NoteStart.css';
import firebase from 'firebase';
import 'firebase/auth';





class NoteStart extends Component{

    constructor(){
        super();

        this.handleAuth = this.handleAuth.bind(this);
        this.handleAuthFace = this.handleAuthFace.bind(this)
    }

    handleAuth(){
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');

        firebase.auth().signInWithPopup(provider)
        
        .then(result=> console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message} ` ))

    }

    handleAuthFace(){

        let provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope("public_profile");

        firebase.auth().signInWithPopup(provider)
        .then(result=> console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message} ` ))

    }

    handleAuthEmailAndPass(){



    }


    render(){

        return(

            <div className= "NotesStart">
                <input type="text" placeholder="Type your email"/>
                <br/>
                <input type="text" placeholder= "Type your password" />
                <br/>
                <input type="Button" value= "Sign In" />
                <br/>
                <h2>Login with</h2>
                <input onClick={this.handleAuthFace} value= "Facebook" type="button"/>
                <br/>
            
                <input onClick={this.handleAuth} value = "Google" type="button"/>
           </div>

        )

    }


}

export default NoteStart;