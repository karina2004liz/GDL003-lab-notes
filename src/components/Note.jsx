import React,{Component} from 'react';
import './Note.css';


class Note extends Component{

    constructor(props){
        super(props);
        this.noteId = props.noteId;
        this.noteContent = props.noteContent;
    }


    handleRemove(id){

       const userResponse = window.confirm('¿Estás seguro de que quieres eliminar la nota?');

        if(userResponse){
            this.props.removeNote(id)
        }
        else{
            return;
        }

        

    }

    render(){
        return(
            <div className="Note">
                <span onClick= {()=>this.handleRemove(this.noteId)} >&times;</span>

            <h3>{this.noteContent}</h3>
        </div>
        )

    }
}

export default Note