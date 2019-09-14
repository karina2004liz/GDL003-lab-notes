import React, {Component} from 'react';
import fireConfig from './database/config'
import NoteStart from './components/NoteStart';
import App from './App'


class Start extends Component{

    constructor(){
        super();
        this.state ={
           user : null
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){

        fireConfig.auth().onAuthStateChanged((user)=>{

            if(user){

                this.setState({user});
            }
            else{

                this.setState({user:null})
            }

        })


    }

    render(){

        return(

            <div>
                {this.state.user ? (<App/>) : (<NoteStart/>)}
            </div>
             )
    }

}


export default Start;