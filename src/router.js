import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import App from './App';
import NoteStart from './components/NoteStart';
import Start from './Start';


const Router = () =>{

    return(

    <Start>
        <Switch>
            <Route exact path = "/DontForgetApp" component = {NoteStart} />
            <Route exact path = "/Notes" component = {App} />
        </Switch>
     </Start>
)

}




export default Router
