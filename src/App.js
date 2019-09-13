import React,{Component} from 'react';
import './App.css';
//import { throwStatement } from '@babel/types';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import NoteStart from './components/NoteStart';
import firebase from 'firebase';
import {db_config} from './database/config';
import 'firebase/database' ;
import 'firebase/auth';
//import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";




class App extends Component{

  constructor(){
    super();


    this.app = firebase.initializeApp(db_config); //conection to firebase
    this.db = this.app.database().ref().child('notes'); //colection named notes

    this.state ={
        notes: []
    }
 
  }




  componentWillMount(){

    const prevNotes = this.state.notes;

    this.db.on('child_added', snap =>{


      prevNotes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent,
     })

     this.setState({
       notes: prevNotes
     })
    })
;



    this.db.on('child_removed', snap =>{

      for(var i = 0; i< prevNotes.length; i++){

        if(prevNotes[i].noteId === snap.key){

          prevNotes.splice(i,1)
        }

      }

      this.setState({
        notes : prevNotes
      })

    });

  

  }


  
updateNote=(noteId,note)=>{

this.db.child(noteId).update({noteContent: note});  


}




  removeNote = (noteId) =>{

    this.db.child(noteId).remove();
    
  }

  addNote = (note) =>{

    this.db.push().set({noteContent: note})
    
  }


  logOut =()=>{

    firebase.auth().signOut()
    .then(result=> console.log("Se ha cerrado sesion"))
    .catch(error => console.log(`Error ${error.code}: ${error.message} ` ))

}


  render(){



    return(

      <div className ="notesContainer">
    

      <div className = "noteStart">
     <NoteStart handleAuth= {this.handleAuth} />               
      </div>


        <div className= "notesBody">
        {
          this.state.notes.map(note =>{

            return(
              
              <Note
              noteContent = {note.noteContent}
              noteId = {note.noteId}
              key = {note.noteId}
              removeNote= {this.removeNote}
              updateNote ={this.updateNote}
              />
  
            )
          })
}

        </div>


        <div className= "notesFooter">

        <NoteForm addNote= {this.addNote} 
        />

        </div>

        <input onClick ={this.logOut} value = "LogOut" type= "button" ></input>
      </div>


    );


  }


}

export default App;