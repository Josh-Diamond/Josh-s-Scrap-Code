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
  const [pumps, setPumps] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPumps = async () => {
      setLoading(true)
      // const res = await axios.get('URL_HERE')
      // setPumps(res.data)
      setPumps([
        {
          latitude: 12.8,
          longitude: 105,
          status: 1,
          sensor_id: 4715,
          country_name: "Stueng Saen",
          commune_name: 'Kampong Svay'
        },
        {
          latitude: 11.56,
          longitude: 105.5,
          status: 0,
          sensor_id: 4719,
          country_name: "Prey Veng",
          commune_name: 'Svay Antor'
        },
        {
          latitude: 13.56,
          longitude: 105.12,
          status: 2,
          sensor_id: 4718,
          country_name: "Preah Vihear",
          commune_name: 'Chey Saen'
        },
        {
          latitude: 13.2,
          longitude: 103.5,
          status: 2,
          sensor_id: 4721,
          country_name: "Battambang",
          commune_name: 'Aek Phnum'
        },
        {
          latitude: 11.56,
          longitude: 103.3,
          status: 2,
          sensor_id: 4720,
          country_name: "Khemara Phoumin",
          commune_name: 'Thma Bang'
        },
        {
          latitude: 13.4,
          longitude: 104,
          status: 2,
          sensor_id: 4723,
          country_name: "Siem Reap",
          commune_name: 'Prasat Bakong'
        },
        {
          latitude: 12.1,
          longitude: 104.5,
          status: 0,
          sensor_id: 4722,
          country_name: "Kampong",
          commune_name: 'Tuek Phos'
        },
        {
          latitude: 11.9,
          longitude: 106,
          status: 2,
          sensor_id: 4724,
          country_name: "Tbong Khmum",
          commune_name: 'Ponnea Krek'
        },
        {
          latitude: 12.56,
          longitude: 106,
          status: 1,
          sensor_id: 0,
          country_name: "Kratie",
          commune_name: 'Chetr Borei'
        }
      ])
      setLoading(false)
    }
    fetchPumps()
  }, [])
  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} /> */}
        {/* Private Routes */}
        <PrivateRoute path="/home" view={Home} pumps={pumps} />}/>
        <Route path="/monitors" render={props => <Monitors {...props} pumps={[{latitude: 13, longitude: 105}]} />}/>
        <Route path="/admin" render={props => <Admin {...props} pumps={[{latitude: 13, longitude: 105}]} />}/>
        <Route exact path="/settings" render={props => <Settings {...props} />} /> 
      </Switch>
    </div>
  );
}

export default App;
