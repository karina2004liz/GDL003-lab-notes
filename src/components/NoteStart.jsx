import React, {Component} from 'react';
import './NoteStart.css';
import firebase from 'firebase';
import 'firebase/auth';





class NoteStart extends Component{

    constructor(){
        super();

        this.handleAuth = this.handleAuth.bind(this);
        this.handleAuthFace = this.handleAuthFace.bind(this);
        this.handleAuthEmailAndPass = this.handleAuthEmailAndPass.bind(this);
        this.logOut = this.logOut.bind(this);
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

        let email = this.textEmail.value;
        let pass = this.textPass.value;

        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(result=> console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message} ` ))


    }


    logOut(){

        firebase.auth().signOut()
        .then(result=> console.log("Se ha cerrado sesion"))
        .catch(error => console.log(`Error ${error.code}: ${error.message} ` ))

    }


    render(){

        return(

            <div className= "NotesStart">
                <form>
                <input required ref= {input=>{this.textEmail = input;}} type="text" placeholder="Type your email"/>
                <br/>
                <input required ref= {input=>{this.textPass = input;}} type="password" placeholder= "Type your password" />
                <br/>
                <input onClick={this.handleAuthEmailAndPass} type="Button" value= "Sign In" />
                <br/>

                </form>

                <h2>Login with</h2>
                <input onClick={this.handleAuthFace} value= "Facebook" type="button"/>
                <br/>
            
                <input onClick={this.handleAuth} value = "Google" type="button"/>
                <input onClick ={this.logOut} value = "LogOut" type= "button" ></input>
           </div>

        )

    }


}

export default NoteStart;