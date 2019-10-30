import React, { useState } from 'react'
import Map from '../components/Map'
import { css } from 'emotion'

export default function Home({ pumps }) {
    const [modalId, setModalId] = useState(null)

    return (
        <div>
            <Map pumps={pumps} modalId={modalId} setModalId={setModalId} />
        </div>
    )
}
