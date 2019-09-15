import React, {Component} from 'react';
import './NoteForm.css';


class NoteForm extends Component{

    /*constructor(){
        super();

    } */

    updateNote = ()=>{

        this.props.updateNote(this.textInput.value);
        this.textInput.value = "";
        this.textInput.focus();

    }

    addNote=()=>{

      this.props.addNote(this.textInput.value);
      this.textInput.value = '';
      this.textInput.focus();

    } 

    render(){
        return(
            <div className= "NoteForm">
            <input ref= {input=>{this.textInput = input;}} placeholder="Write a new note" type="textarea"/>
            <input onClick= {this.addNote} type="button" value= "Add Note"/>
            </div>


        )




    }
}
export default NoteForm;