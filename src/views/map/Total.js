import React from 'react'
import {
  MapContainer,
  TileLayer
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center = [-7.277365292709227, 112.7808347637589]

const Total = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          Total
        </div>
        <div className="card-body">
          <MapContainer center={center} zoom={30} scrollWheelZoom={false} style={{ height: 800 }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Total