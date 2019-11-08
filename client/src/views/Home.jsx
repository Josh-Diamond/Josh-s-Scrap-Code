import React, { useState, useEffect } from 'react'
import Map from '../components/Map'
import axiosWithAuth from '../components/axiosWithAuth'
import { css } from 'emotion'

export default function Home({ history }) {
    const [modalPump, setModalPump] = useState(null)
    const [pumps, setPumps] = useState([])
    const [sensors, setSensors] = useState([])
    const [historic, setHistoric] = useState([])
   
    useEffect(() => {
        fetchPumps()
        fetchSensors()
        fetchHistoric()
    },[])

    const fetchPumps = () => {
        axiosWithAuth()
            .get('https://welldone-db.herokuapp.com/api/pumps')
            .then(res => setPumps(res.data))
            .catch(err => console.log(err))
    }

    const fetchSensors = () => {
        axiosWithAuth()
            .get('https://welldone-db.herokuapp.com/api/sensors')
            .then(res => setSensors(res.data))
            .catch(err => console.log(err))
    }

    const fetchHistoric = () => {
        axiosWithAuth()
            .get('https://welldone-db.herokuapp.com/api/history')
            .then(res => setHistoric(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Map pumps={pumps} sensors={sensors} historic={historic} modalPump={modalPump} setModalPump={setModalPump} history={history} />
        </div>
    )
}
