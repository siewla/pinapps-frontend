import React, { Component } from 'react'
import { isAuth } from './helpers/auth.services'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderLogin from '../src/screens/isLogin/HeaderLogin';
import HeaderNotLogin from '../src/screens/notLogin/HeaderNotLogin';

import Activate from './screens/Authentication/Activate'
import Reset from './screens/Authentication/Reset'

import Main from './screens/notLogin/Main'
import About from './screens/notLogin/About'
import Register from './screens/Authentication/Register'
import NotLogin from './screens/notLogin/NotLogin'
import AppsByCategory from './screens/notLogin/AppsByCategory'

import MyApps from './screens/isLogin/MyApps'

import Footer from './components/Footer'

import './App.css';

export class App extends Component {
  constructor (){
    super()
    this.state ={
      isLogin: false,
      userData: null
    }
  }

  setLogin = (isLogin) =>{
    this.setState({
      isLogin
    })
  }

  componentDidMount (){
    if(isAuth()){
      this.setState ({
        isLogin: true,
        userData: JSON.parse(localStorage.getItem('user'))
      })
    }
  }
  render() {
    return (
      <div>
        <Router>
          {this.state.isLogin ? <HeaderLogin userData={this.state.userData}/>: <HeaderNotLogin setLogin={this.setLogin} />}
          <Switch>
            <Route path ='/' exact render={props => <Main {...props} userData={this.state.userData} isLogin={this.state.isLogin} setLogin={this.setLogin}/>}/>
            <Route path ='/about' exact render={props => <About {...props} />}/>
            <Route path ='/users/register' exact render={props => <Register {...props} userData={this.state.userData} setLogin={this.setLogin} />}/>
            <Route path ='/users/login' exact render={props => <NotLogin {...props} userData={this.state.userData} isLogin={this.state.isLogin} setLogin={this.setLogin} />}/>
            <Route path ='/apps/category/:categoryID' exact render={props => <AppsByCategory {...props} userData={this.state.userData} />}/> 
            <Route path ='/myapps/' exact render={props => <MyApps {...props} userData={this.state.userData} />}/> 
            <Route path ='/users/activate/:token' exact render={props => <Activate {...props} />}/>  
            <Route path ='/users/password/reset/:token' exact render={props => <Reset {...props} />}/>  
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
