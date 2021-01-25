import React from 'react'
import {
  MapContainer,
  TileLayer,
  Polyline
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center = [-7.277365292709227, 112.7808347637589]

const polyline = [
  [-7.277365292709227, 112.7808347637589],
  [-7.277163519224555, 112.78254216719021]
]
const polyline1 = [
  [-7.277163519224555, 112.78254216719021],
  [-7.276739191296101, 112.78486945851185]
]
const polyline2 = [
  [-7.276739191296101, 112.78486945851185],
  [-7.276423755184296, 112.78640248960687]
]

// const multiPolyline = [
//   [
//     [51.5, -0.1],
//     [51.5, -0.12],
//     [51.52, -0.12],
//   ],
//   [
//     [51.5, -0.05],
//     [51.5, -0.06],
//     [51.52, -0.06],
//   ],
// ]

const limeOptions = { color: 'lime', weight: 15 }
const orangeOptions = { color: 'orange', weight: 15 }
const redOptions = { color: 'red', weight: 15 }

const Prediction = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          Prediction
        </div>
        <div className="card-body">
          <MapContainer center={center} zoom={30} scrollWheelZoom={false} style={{ height: 800 }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline pathOptions={redOptions} positions={polyline} />
            <Polyline pathOptions={orangeOptions} positions={polyline1} />
            <Polyline pathOptions={limeOptions} positions={polyline2} />
            {/* <Polyline pathOptions={limeOptions} positions={multiPolyline} /> */}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Prediction