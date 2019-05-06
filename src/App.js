import React from 'react';
import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Auth />
        </div>
      </BrowserRouter>
  );
}

export default App;

