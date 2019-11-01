import React, { useState } from 'react';
import './App.css';
import Login from './views/Login'
import Home from './views/Home'
import Monitors from './views/Monitors'
import Nav from './components/Nav'
import { Route, Switch } from 'react-router-dom';
import Admin from './views/Admin'


function App() {
 
  return (
    <div>
      {/* <Admin /> */}
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} /> */}
        {/* Private Routes */}
        <Route path="/home" render={props => <Home {...props} pumps={[{latitude: 13, longitude: 105}]} />}/>
        <Route path="/monitors" render={props => <Monitors {...props} pumps={[{latitude: 13, longitude: 105}]} />}/>
        <Route path="/admin" render={props => <Admin {...props} pumps={[{latitude: 13, longitude: 105}]} />}/>
      </Switch>
    </div>
  );
}

export default App;
