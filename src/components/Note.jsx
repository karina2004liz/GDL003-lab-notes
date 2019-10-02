import React,{Component} from 'react';
import './Note.css';
import fireConfig from '../database/config';



class Note extends Component{

    constructor(props){
        super(props);

        this.db = fireConfig.database().ref().child('notes'); 

        this.noteId = props.noteId;
        this.noteContent = props.noteContent;
        this.date = props.date;
        this.removeNote = props.removeNote;
        this.edited = props.edited;
        this.file = props.file;


            this.state ={
            notes: []
            }
        
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

    Update = (id) =>{

       const newContent = prompt("Edit your note");

    var date = new Date();
    var dia = date.getDate();
    var mes = date.getMonth()+1;
    var hora = date.getHours();
    var min = date.getMinutes();

        this.db.child(id).update({noteContent: newContent,
        edited: dia+"/"+mes+" "+hora+":"+min, });  

    }





    render(props){

        
        return(

            <div key= {this.noteId} className="Note">
               <input onClick={()=>this.Update(this.noteId)} id= "edit" type="image" src = "https://www.pinclipart.com/picdir/big/8-89038_big-image-editing-clip-art-png-download.png"/>
                <input onClick= {()=>this.handleRemove(this.noteId)} type="image" src="https://www.pinclipart.com/picdir/big/240-2407973_tache-logo-of-accord-logo-of-cargill-clipart.png"/>
            
                <br/>
                <br/>

                <h2>{this.noteContent}</h2>
                <p>Created:{this.date}</p>
                <p>Edited:{this.edited}</p>
               
                <p> {this.file} </p>
                </div>
        )

    }
}

export default Note