import React,{Component} from 'react';
import './App.css';
//import { throwStatement } from '@babel/types';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import NoteStart from './components/NoteStart';
import firebase from 'firebase';
import {db_config} from './database/config';
import 'firebase/database' 


class App extends Component{

  constructor(){
    super();


    this.app = firebase.initializeApp(db_config); //conection to firebase
    this.db = this.app.database().ref().child('notes'); //colection named notes


    this.state ={
        notes: []
    }

    

    this.addNote = this.addNote.bind(this);
    this.removeNote =this.removeNote.bind(this);

   
  }



  componentDidMount(){

    const notes = this.state.notes;



    this.db.on('child_added', snap =>{

      notes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent,
     })

     this.setState({
       notes: notes
     })
    })
;



    this.db.on('child_removed', snapshot =>{

      for(let i = 0; i< notes.length; i++){

        if(notes[i].noteId = snapshot.key){

         notes.splice(i,1);
 }

      }
           
      this.setState({
        notes: notes,
      })
    });

  }


  
updateNote(noteId,note){

this.db.child(noteId).update({noteContent: note});  


}




  removeNote(noteId){



    this.db.child(noteId).remove();
    
  }

  addNote(note){

    this.db.push().set({noteContent: note})
    
  }


  render(){

    
    return(
      <div className ="notesContainer">
        

        <div className ="notesHeader">
        <h2>Don´t forget-App</h2>

        <h4>Your personal app notes</h4>
        
        </div>

      <div className = "noteStart">

      <img src = "https://i.imgur.com/1FFacta.gif" className = "catImage"/>
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

      </div>

    );


  }


}

export default App;