import React, {Component} from 'react';
import './NoteAvatar.css';
import fireConfig from '../database/config';


class NoteAvatar extends Component{



 componentWillMount(){
    this.getDataUser();

 }   




getDataUser=()=>{

var user = fireConfig.auth().currentUser;
var tocken = user.accessToken;

if(user != null) {

    this.name = user.displayName;
    this.photo = user.photoURL;

    if(this.photo == null && this.name == null){

        this.email = user.email;
        this.photo = "https://media.giphy.com/media/q4wcaEbmboPOE/giphy.gif";

    }

    }
}





    render(){
        return(

            

            <div>
                
                <h1>Welcome</h1>
                <img className= "avatar" src={this.photo} ></img>
                <h2>{this.name}</h2>
                <h2>{this.email}</h2>

                
            </div>


        )


    }


}

export default NoteAvatar;