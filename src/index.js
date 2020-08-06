import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Header from './components/Header'
import Footer from './components/Footer'

import Register from './screens/Authentication/Register'
import Activate from './screens/Authentication/Activate'
import Login from './screens/Authentication/Login'
import Forget from './screens/Authentication/Forget'
import Reset from './screens/Authentication/Reset'
// import ShowAll from './components/ShowAll';
import AddApp from './screens/Apps/AddApp';

ReactDOM.render(
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path ='/' exact render={props => <App {...props} />}/>
          {/* <Route path ='/apps' exact render ={props => <ShowAll {...props} />} /> */}
          <Route path ='/apps/new' exact render ={props => <AddApp {...props} />} />
          <Route path ='/users/register' exact render={props => <Register {...props} />}/>
          <Route path ='/users/login' exact render={props => <Login {...props} />}/>
          <Route path ='/users/activate/:token' exact render={props => <Activate {...props} />}/>  
          <Route path ='/users/password/forget' exact render={props => <Forget {...props} />}/>
          <Route path ='/users/password/reset/:token' exact render={props => <Reset {...props} />}/>  
        </Switch> 
        <Footer />
      </Router>
    </div>
    ,
  document.getElementById('root')
);


