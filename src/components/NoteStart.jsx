import React, { Component } from "react";
import "./NoteStart.css";
import firebase from "firebase";
//import 'firebase/auth';
import fireConfig from "../database/config";

class NoteStart extends Component {
  constructor() {
    super();
  }

  handleAuth = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/plus.login");

    fireConfig
      .auth()
      .signInWithPopup(provider)

      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message} `));
  };

  handleAuthFace = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("public_profile");

    fireConfig
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message} `));
  };

  handleAuthEmailAndPass = () => {
    let email = this.textEmail.value;
    let pass = this.textPass.value;

    fireConfig
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        console.log("login successful");
      })
      .catch(error => {
        fireConfig
          .auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(() => console.log("register has been successful"))
          .catch(error => console.log(error));
      });
  };

  render() {
    return (
      <div className="NotesStart">
        <center>
          <h2>Don´t forget-App</h2>

          <h4>Your personal app notes</h4>
        </center>

        <img
          src="https://media.tenor.com/images/3cfad63c022113f11ffb8d164692cef7/tenor.gif"
          className="catImage"
        />
        <form>
          <input
            required
            ref={input => {
              this.textEmail = input;
            }}
            type="text"
            placeholder="Type your email"
          />
          <br />
          <input
            required
            ref={input => {
              this.textPass = input;
            }}
            type="password"
            placeholder="Type your password"
          />
          <br />
          <input
            onClick={this.handleAuthEmailAndPass}
            type="Button"
            value="Sign In"
          />
          <br />
        </form>

        <h3>Login with</h3>
        <input onClick={this.handleAuthFace} value="Facebook" type="button" />
        <br />
        <input onClick={this.handleAuth} value="Google" type="button" />
      </div>
    );
  }
}

export default NoteStart;
