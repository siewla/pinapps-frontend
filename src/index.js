import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Register from './screens/Register'
import Activate from './screens/Activate'
import Login from './screens/Login'
import Forget from './screens/Forget'
import Reset from './screens/Reset'

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path ='/' exact render={props => <App {...props} />}/>
        <Route path ='/users/register' exact render={props => <Register {...props} />}/>
        <Route path ='/users/login' exact render={props => <Login {...props} />}/>
        <Route path ='/users/activate/:token' exact render={props => <Activate {...props} />}/>  
        <Route path ='/users/password/forget' exact render={props => <Forget {...props} />}/>
        <Route path ='/users/password/reset/:token' exact render={props => <Reset {...props} />}/>  
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


