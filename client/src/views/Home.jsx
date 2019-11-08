import React, { useState, useEffect } from 'react'
import Map from '../components/Map'
import axiosWithAuth from '../components/axiosWithAuth'
import { css } from 'emotion'

export default function Home({ history }) {
    const [modalPump, setModalPump] = useState(null)
    const [sensors, setSensors] = useState([])

   
    useEffect(() => {
        fetchSensors()
    },[])

    const fetchSensors = () => {
        axiosWithAuth()
            .get('https://welldone-db.herokuapp.com/api/sensors')
            .then(res => setSensors(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Map pumps={sensors} modalPump={modalPump} setModalPump={setModalPump} history={history} />
        </div>
    )
}
