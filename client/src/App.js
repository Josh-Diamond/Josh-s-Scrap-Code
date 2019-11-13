import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './views/Login'
import Home from './views/Home'
import Monitors from './views/Monitors'
import Nav from './components/Nav'
import { Route, Switch } from 'react-router-dom';
import Admin from './views/Admin'
import Settings from './views/Settings'
import PrivateRoute from './components/PrivateRoute'


function App() {
  // const [pumps, setPumps] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPumps = async () => {
      setLoading(true)
      // const res = await axios.get('URL_HERE')
      // setPumps(res.data)
      setLoading(false)
    }

    // fetchPumps()
  }, [])
  return (
    <div>
     {/* <Home /> */}
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} /> */}
        {/* Private Routes */}
        <PrivateRoute path="/home" view={Home} />}/>
        <Route path="/monitors" render={props => <Monitors {...props} pumps={[{latitude: 13, longitude: 105}]} />}/>
        <Route path="/admin" render={props => <Admin {...props} pumps={[{latitude: 13, longitude: 105}]} />}/>
        <Route exact path="/settings" render={props => <Settings {...props} />} /> 
      </Switch>
    </div>
  );
}

export default App;
