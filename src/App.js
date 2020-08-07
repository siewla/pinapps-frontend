import React from 'react';
import PrivateMainpage from './screens/isLogin/Main'
import PublicMainpage from './screens/notLogin/Main'
import { authenticate, isAuth } from './helpers/auth'

import './App.css';

function App() {
  return (
    <div>
      {isAuth()? 
      <PrivateMainpage />
      : <PublicMainpage />}
    </div>
  );
}

export default App;
