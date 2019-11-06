import React, { useState, useEffect } from 'react'
import Map from '../components/Map'
import axiosWithAuth from '../components/axiosWithAuth'
import { css } from 'emotion'

export default function Home({ history }) {
    const [modalId, setModalId] = useState(null)
    const [pumps, setPumps] = useState([])

    useEffect(() => {
        fetchPumps()
    },[])

    const fetchPumps = () => {
        axiosWithAuth()
            .get('https://welldone-db.herokuapp.com/api/pumps')
            .then(res => setPumps(res.data))
            .catch(err => console.log(err))
        
    }

    return (
        <div>
            <Map pumps={pumps} modalId={modalId} setModalId={setModalId} history={history} />
        </div>
    )
}
