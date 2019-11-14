import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl"
// import Modal from "../components/Modal"
import SearchBar from './SearchBar'
import Filter from './Filter'
import { css } from 'emotion'
import Nav from './Nav'
import funcPin from '../static/funcPin.png'
import unknownPin from '../static/unknownPin.png'
import nonFuncPin from '../static/nonFuncPin.png'
import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineQuestionCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import StatusCard from './StatusCard'



export default function Map({ pumps, setModalPump, modalPump, history }) {
  const [filteredPumps, setFilteredPumps] = useState([])  
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100vh",
    latitude: 12.55,
    longitude: 104.9,
    center: [12.55, 104.9],
    zoom: 7.2,
    minZoom: 6.28,
    maxZoom: 13,
  })
  
  const [maxBounds] = useState([
    [10.572449, 103.140854], // Southwest coordinates
    [14.841942, 107.66624], // Northeast coordinates
  ])
  // console.log('pumpWithStatus', pumpsWithStatuses)
  const mapPins = {
    status: {
      functional: "../static/success.svg",
      unknown: "../static/unknown.svg",
      nonFunctional: "../static/error.svg",
    },
  }

  const searchFilter = e => {
    if(e.target.value.length === 0){
      setFilteredPumps([])
    }
    if(filteredPumps.length === 0){
      const filtered = pumps.filter(pump => pump.commune_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.country_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.district_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.latitude.toString().includes(e.target.value.toString()) || pump.longitude.toString().includes(e.target.value.toString()) || pump.sensor_id.toString().includes(e.target.value.toString()))
      setFilteredPumps(filtered)
    }
    if(filteredPumps.length !== 0){
      const filtered = filteredPumps.filter(pump => pump.commune_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.country_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.district_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.latitude.toString().includes(e.target.value.toString()) || pump.longitude.toString().includes(e.target.value.toString()) || pump.sensor_id.toString().includes(e.target.value.toString()))
      setFilteredPumps(filtered)
    }
    if(e.target.value.length !== 0){
      const filtered = pumps.filter(pump => pump.commune_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.country_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.district_name.toLowerCase().includes(e.target.value.toLowerCase()) || pump.latitude.toString().includes(e.target.value.toString()) || pump.longitude.toString().includes(e.target.value.toString()) || pump.sensor_id.toString().includes(e.target.value.toString()))
      setFilteredPumps(filtered)
    }
  }
  
  // Static Status Spread
  const statusData = [
    {
        status: 2
    },
    {
        status: 1
    },
    {
        status: 2
    },
    {
        status: 2
    },
    {
        status: 1
    },
    {
        status: 0
    },
    {
        status: 2
    },
    {
      status: 2
  },
  {
      status: 1
  },
  {
      status: 2
  },
  {
      status: 2
  },
  {
      status: 1
  },
  {
      status: 0
  },
  {
      status: 2
  }
]
  // Static Status Spread End

  // const mapAdjust = pump => {
  //   setViewPort({...viewPort, center: [pump.latitude, pump.longitude]})
  // }
  console.log('pumps', pumps)
  console.log('modalPUMP', modalPump)
  return (
    <div className={css({ img: { cursor: "pointer" }, display: 'flex' })}>
      <Nav history={history} />
      <ReactMapGL
        fitBounds={undefined}
        maxBounds={maxBounds}
        mapStyle="mapbox://styles/diamondmail91/ck26o0ysl68821cpa9h6gj8xc"
        mapboxApiAccessToken="pk.eyJ1IjoiZGlhbW9uZG1haWw5MSIsImEiOiJjanpidzZxajMwMXF5M2Rueng0MmExc3FsIn0.8_SaAolyg_YzvdzClFuvXQ"
        onViewportChange={view => setViewPort({ ...view, width: "100%" })}
        className={css({ borderRadius: 5 })}
        maxBounds={[
          [-74.04728500751165, 40.68392799015035],
          [-73.91058699000139, 40.87764500765852],
        ]}
        {...viewPort}>

        {/* Filter & Search */}
        <div className={css({ display: 'flex', justifyContent: 'space-between', margin: '1%'})}>
            <SearchBar searchFilter={searchFilter} />
            <Filter pumps={pumps} viewPort={viewPort} setViewPort={setViewPort} filteredPumps={filteredPumps} setFilteredPumps={setFilteredPumps} />
        </div>
        {/* End Filter & Search */}

        {/* Map Pins, Markers, Modals */}
        {filteredPumps.length === 0 ? pumps.map(pump => (
          <>
            <Marker
            zIndex={0}
            latitude={pump.latitude}
            longitude={pump.longitude}
            offsetLeft={-20}
            offsetTop={-10}
            // onClick={()=> mapAdjust(pump)}>
            >
                {(pump.status === 0 || pump.status === null) ? (
                  <img
                    src={nonFuncPin}
                    width={"31px"}
                    className={css({ zIndex: 2 })}
                    onClick={() => setModalPump(pump)}
                    alt=""
                    />
                    ) : pump.status === 1 ? (
                      <img
                      src={unknownPin}
                      width={"31px"}
                      onClick={() => setModalPump(pump)}
                      alt=""
                  />
                  ) : pump.status === 2 ? (
                    <img
                    src={funcPin}
                    width={"31px"}
                    onClick={() => setModalPump(pump)}
                    alt=""
                    />
                  ) : null}
                {/* <img
                    src={funcPin}
                    width={"31px"}
                    onClick={() => setModalPump(pump)}
                    alt=""
                    /> */}
                    {/* { pump.id === modalPump ? <Modal modalId={modalId} pumps={pumps} setModalId={setModalId} /> : null} */}
            </Marker>
            {modalPump ? (
            <Popup latitude={modalPump.latitude} longitude={modalPump.longitude} onClose={()=> setModalPump(null)}>
             <div className={css({ display: 'flex', justifyContent: 'space-between', width: '210px'})}>
              <div>
                  {modalPump.status === 0 || modalPump.status === null ? (<div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FECDCD', height: '45px', width: '45px', borderRadius: '50%'})}>
                    <FiAlertCircle className={css({ color: '#f44336', fontSize: '1.7rem' })} />
                  </div>) :
                  modalPump.status === 1 ? (<div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffe2b8', height: '45px', width: '45px', borderRadius: '50%'})}>
                  <FiAlertCircle className={css({ color: '#FFAD34', fontSize: '1.7rem' })} />
                </div>) :
                modalPump.status === 2 ? (<div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#B8FFB8', height: '45px', width: '45px', borderRadius: '50%'})}>
                <FiAlertCircle className={css({ color: '#01c000', fontSize: '1.7rem' })} />
              </div>) :
              null}
                  <h3 className={css({ margin: 0})}>{modalPump.sensor_id}</h3>
                </div>
                <div>
                  {/* Static Status Spread */}
                  <div className={css({ display: 'flex', margin: '3% 0', justifyContent: 'space-evenly', width: '125px',})}>
                    {statusData.map(status => <StatusCard status={status} />)}
                  </div>
                  {/* Static Status Spread End */}
                  <div className={css({ color: '#212121', margin: '3% 0'})}>
                    <h3 className={css({ margin: 0})}>{modalPump.country_name}</h3>
                    <p className={css({ margin: 0})}>{modalPump.commune_name}</p>
                  </div>
                </div>
             </div>
            </Popup>
            ) : null}
          </>
        ))  : filteredPumps.map(pump => (
          <>
            <Marker
            zIndex={0}
            latitude={pump.latitude}
            longitude={pump.longitude}
            offsetLeft={-20}
            offsetTop={-10}
            // onClick={()=> mapAdjust(pump)}>
            >
                {pump.status === 0 || pump.status === null ? (
                  <img
                    src={nonFuncPin}
                    width={"31px"}
                    className={css({ zIndex: 2 })}
                    onClick={() => setModalPump(pump)}
                    alt=""
                    />
                    ) : pump.status === 1 ? (
                      <img
                      src={unknownPin}
                      width={"31px"}
                      onClick={() => setModalPump(pump)}
                      alt=""
                  />
                  ) : pump.status === 2 ? (
                    <img
                    src={funcPin}
                    width={"31px"}
                    onClick={() => setModalPump(pump)}
                    alt=""
                    />
                  ) : null}
                {/* <img
                    src={funcPin}
                    width={"31px"}
                    onClick={() => setModalPump(pump)}
                    alt=""
                    /> */}
                    {/* { pump.id === modalPump ? <Modal modalId={modalId} pumps={pumps} setModalId={setModalId} /> : null} */}
            </Marker>
            {modalPump ? (
            <Popup latitude={modalPump.latitude} longitude={modalPump.longitude} onClose={()=> setModalPump(null)}>
             <div className={css({ display: 'flex', justifyContent: 'space-between', width: '210px'})}>
              <div>
                  {modalPump.status === 0 || modalPump.status === null ? (<div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FECDCD', height: '45px', width: '45px', borderRadius: '50%'})}>
                    <FiAlertCircle className={css({ color: '#f44336', fontSize: '1.7rem' })} />
                  </div>) :
                  modalPump.status === 1 ? (<div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffe2b8', height: '45px', width: '45px', borderRadius: '50%'})}>
                  <FiAlertCircle className={css({ color: '#FFAD34', fontSize: '1.7rem' })} />
                </div>) :
                modalPump.status === 2 ? (<div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#B8FFB8', height: '45px', width: '45px', borderRadius: '50%'})}>
                <FiAlertCircle className={css({ color: '#01c000', fontSize: '1.7rem' })} />
              </div>) :
              null}
                  <h3 className={css({ margin: 0})}>{modalPump.sensor_id}</h3>
                </div>
                <div>
                  {/* Static Status Spread */}
                  <div className={css({ display: 'flex', margin: '3% 0', justifyContent: 'space-evenly', width: '125px',})}>
                    {statusData.map(status => <StatusCard status={status} />)}
                  </div>
                  {/* Static Status Spread End */}
                  <div className={css({ color: '#212121', margin: '3% 0'})}>
                    <h3 className={css({ margin: 0})}>{modalPump.country_name}</h3>
                    <p className={css({ margin: 0})}>{modalPump.commune_name}</p>
                  </div>
                </div>
             </div>
            </Popup>
            ) : null}
          </>
        ))}
        {/* End Map Pins, Markers, Modals */}
        {/* Zoom Controls */}
        <div className={css({ position: "absolute", right: 10, bottom: "9%" })}>
          <NavigationControl showZoom />
        </div>
        {/* End Zoom Controls */}
      </ReactMapGL>
    </div>
  )
}
