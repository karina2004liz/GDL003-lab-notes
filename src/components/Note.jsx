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




    



// <input id= "edit" type="image" src = "https://www.pinclipart.com/picdir/big/8-89038_big-image-editing-clip-art-png-download.png"/>



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
               
                
                </div>
        )

    }
}

export default Note