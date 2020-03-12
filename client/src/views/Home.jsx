import React, { useState, useEffect } from 'react'
import Map from '../components/Map'
import axiosWithAuth from '../components/axiosWithAuth'
import { css } from 'emotion'

export default function Home({ history, pumps }) {
    const [modalPump, setModalPump] = useState(null)
    const [sensors, setSensors] = useState([])

   
    useEffect(() => {
        fetchSensors()
        // fetchStatuses()
    },[])

    // const fetchStatuses = () => {
    //     axios
    //         .get('https://dashboard.welldone.org/.netlify/functions/get_momo_status?id=4719')
    //         .then(res => console.log('fetchStatuses', res))
    //         .catch(err => console.log(err))
    // }
    const fetchSensors = () => {
        axiosWithAuth()
            .get('https://welldone-db.herokuapp.com/api/sensors')
            .then(res => setSensors(res.data))
            .catch(err => console.log(err))
    }
    console.log("sensors",sensors)
    return (
        <div>
            <Map pumps={pumps} modalPump={modalPump} setModalPump={setModalPump} history={history} />
        </div>
    )
}
