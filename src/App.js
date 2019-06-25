import React from 'react';
import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import Dashboard from './components/dashboard/Dashboard.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/' component={Dashboard} />
                
                <Route path='/login'component={Auth} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
