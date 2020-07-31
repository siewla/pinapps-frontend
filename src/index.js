import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Register from './screens/Register'
import Activate from './screens/Activate'
import Login from './screens/Login'

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path ='/' exact render={props => <App {...props} />}/>
        <Route path ='/register' exact render={props => <Register {...props} />}/>
        <Route path ='/login' exact render={props => <Login {...props} />}/>
        <Route path ='/users/activate/:token' exact render={props => <Activate {...props} />}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


