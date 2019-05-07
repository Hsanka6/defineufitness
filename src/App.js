import React from 'react';
import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import ClientList from './components/ClientList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path='/'component={ClientList} />
                <Route path='/login'component={Auth} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

