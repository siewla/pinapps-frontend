import React, { Component } from 'react'
import PrivateMainpage from './screens/isLogin/Main'
import PublicMainpage from './screens/notLogin/Main'
import { isAuth } from './helpers/auth.services'

import './App.css';

export class App extends Component {
  componentDidMount (){
    isAuth();
  }

  render() {
    return (
      <div>
        {isAuth()? 
      <PrivateMainpage />
      : <PublicMainpage />}
      </div>
    )
  }
}

export default App
