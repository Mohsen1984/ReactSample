import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/Counters';
import Navbar from './components/Navbar'

function App() {
  return (
    <React.Fragment>

      <Navbar/>

      <main className='countainer'>
      <Counters/>
      </main>
      
    </React.Fragment>
  );
}

export default App;
