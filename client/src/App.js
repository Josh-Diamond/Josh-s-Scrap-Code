import React from 'react';
import './App.css';
import Login from './views/Login'
import Home from './views/Home'
import Monitors from './views/Monitors'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Home pumps={[{latitude: 13, longitude: 105}]} /> */}
      {/* <Monitors pumps={[{latitude: 13, longitude: 105}]} /> */}
      <Nav />
    </div>
  );
}

export default App;
