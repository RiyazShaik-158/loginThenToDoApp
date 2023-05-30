import React from 'react';
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {


  return (
    <div className='app'>
      <Header/>
      <div className='app_body'>
        <Home />
      </div>
    </div>
  )
}

export default App
