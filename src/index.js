import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Footer from './components/Footer'
import About from './screens/notLogin/About'

import Register from './screens/Authentication/Register'
import Activate from './screens/Authentication/Activate'
import NotLogin from './screens/notLogin/NotLogin'
import Reset from './screens/Authentication/Reset'
import ShowAll from './components/ShowAll';
import AddApp from './screens/Apps/AddApp';

import AppsByCategory from './screens/notLogin/AppsByCategory'
import MyApps from './screens/isLogin/MyApps'

import HeaderLogin from '../src/screens/isLogin/HeaderLogin';
import HeaderNotLogin from '../src/screens/notLogin/HeaderNotLogin';
import { isAuth } from '../src/helpers/auth.services'

ReactDOM.render(
  <App/>
    ,
  document.getElementById('root')
);


