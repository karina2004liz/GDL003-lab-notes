import React, {Component} from "react";
import firebase from 'firebase';
import fireConfig from '../database/config';




class FileUpload extends Component{

    constructor(){

        super();

        this.state = {

            uploadValue: 0,
            picture : null
        };
    }



     handleUpload = (event) =>{

        const file = event.target.files[0];
        const storageRef = fireConfig.storage().ref(`/photos/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot =>{

            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            this.setState({

                uploadValue : percentage
            })

        },(error)=>{
            console.log(error)
        } , ()=>{

            
           this.setState({
                uploadValue: 100,
                picture: task.snapshot.getDownloadUrl     

            })
        })
    }

    render(){

            return(

                <div>

                    <progress value = {this.state.uploadValue} max = "100" ></progress>
                    <br/>
                    <input type= "file" onChange= {this.handleUpload} />
                    <br/>
                    <img src={this.state.picture} />

                </div>

            )

    }

}


export default FileUpload;