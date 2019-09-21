import React, { Component } from "react";
import "./App.css";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
//import NoteStart from './components/NoteStart';
import firebase from "firebase";
import fireConfig from "./database/config";
import "firebase/database";
import NoteAvatar from "./components/NoteAvatar";
import FileUpload from "./components/Fileupload";



class App extends Component {
  constructor() {
    super();

    //conection to firebase

    this.db = fireConfig
      .database()
      .ref()
      .child("notes"); //colection named notes

    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    const useruid = fireConfig.auth().currentUser.uid;

    const prevNotes = this.state.notes;

    this.db.on("child_added", snap => {
      prevNotes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent,
        noteUid: snap.val().noteUid,
        date: snap.val().date,
        edited: snap.val().edited
      });

      this.setState({
        notes: prevNotes
      });
    });

    this.db.on("child_removed", snap => {
      for (var i = 0; i < prevNotes.length; i++) {
        if (prevNotes[i].noteId === snap.key) {
          prevNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: prevNotes
      });
    });

    this.db.on("child_changed", snap => {
      for (var i = 0; i < prevNotes.length; i++) {
        if (prevNotes[i].noteId === snap.key) {
          prevNotes[i] = snap.val();
        }
      }

      this.setState({
        notes: prevNotes
      });
    });
  }

  removeNote = noteId => {
    this.db.child(noteId).remove();
  };

  addNote = note => {
    var date = new Date();
    var dia = date.getDate();
    var mes = date.getMonth() + 1;
    var hora = date.getHours();
    var min = date.getMinutes();

    this.db.push().set({
      noteContent: note,
      noteUid: fireConfig.auth().currentUser.uid,
      date: dia + "/" + mes + " " + hora + ":" + min,
      edited: ""
    });
  };

  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(result => console.log("Se ha cerrado sesion"))
      .catch(error => console.log(`Error ${error.code}: ${error.message} `));
  };

  render() {
    const useruid = fireConfig.auth().currentUser.uid;

    return (
      <div className="notesContainer">
        <div className="notesHeader">
          <h2 className="dont">Don´t forget-App</h2>
          <p>by Karina</p>
          <input
            className="logout"
            onClick={this.logOut}
            value="LogOut"
            type="image"
            src="https://media.giphy.com/media/3FjuotitkhOffmPamc/giphy.gif"
            title="LogOut"
          ></input>
        </div>

        <div className="noteStart">
          <NoteAvatar />
        </div>

        <div className="notesBody">
          <h1>My notes</h1>
          {this.state.notes
            .map(note => {
              if (note.noteUid === useruid) {
                return (
                  <Note
                    noteContent={note.noteContent}
                    noteId={note.noteId}
                    date={note.date}
                    edited={note.edited}
                    key={note.noteId}
                    removeNote={this.removeNote}
                    updateNote={this.updateNote}
                    //file = {<FileUpload/>}
                  />
                );
              }
            })
            .reverse()}
        </div>

        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
