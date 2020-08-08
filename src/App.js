import React, { Component } from 'react'
import { isAuth } from './helpers/auth.services'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderLogin from '../src/screens/isLogin/HeaderLogin';
import HeaderNotLogin from '../src/screens/notLogin/HeaderNotLogin';
// import Login from '../src/screens/notLogin/NotLogin'
import Login from '../src/screens/Authentication/Googlelogin'

import './App.css';

export class App extends Component {
  constructor (){
    super()
    this.state ={
      isLogin: false
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
        isLogin: true
      })
    }
  }

  render() {
    return (
      <div>
        <Router>
          {this.state.isLogin ? <HeaderLogin />: <HeaderNotLogin setLogin={this.setLogin}/>}
          <Switch>
            <Route path ='/auth' render={props => <Login {...props} setLogin={this.setLogin}/>}/>
          </Switch> 
        </Router>
      </div>
    )
  }
}

export default App
