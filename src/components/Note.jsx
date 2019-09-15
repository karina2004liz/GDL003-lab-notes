import React,{Component} from 'react';
import './Note.css';

class Note extends Component{

    constructor(props){
        super(props);

        this.noteId = props.noteId;
        this.noteContent = props.noteContent;
        this.date = props.date;
        this.removeNote = props.removeNote;
        this.updateNote = props.updateNote;
        
    }

    handleRemove =(id)=>{

       const userResponse = window.confirm('¿Estás seguro de que quieres eliminar la nota?');

        if(userResponse){
            this.props.removeNote(id)
        }
        else{
            return;
        }        

    }


// <input id= "edit" type="image" src = "https://www.pinclipart.com/picdir/big/8-89038_big-image-editing-clip-art-png-download.png"/>

    render(props){

        
        return(

            <div key= {this.noteId} className="Note">
               
                <input onClick= {()=>this.handleRemove(this.noteId)} type="image" src="https://www.pinclipart.com/picdir/big/240-2407973_tache-logo-of-accord-logo-of-cargill-clipart.png"/>
                <br/>
                <br/>

                <h2>{this.noteContent}</h2>
                <p>Created:{this.date}</p>
                </div>
        )

    }
}

export default Note