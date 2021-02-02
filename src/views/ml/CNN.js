import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'

const CNN = () => {
  // Tambah ukuran waktu tempat

  return (
    <div>
      <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Tensorflow
        </CCardHeader>
        <CCardBody>
          <CChartLine
            type="line"
            datasets={[
              {
                label: 'Data One',
                backgroundColor: 'rgb(228,102,81,0.9)',
                data: [30, 39, 10, 50, 30, 70, 35, 30, 70, 35]
              },
              {
                label: 'Data Two',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [39, 95, 40, 35, 40, 20, 45, 40, 20, 45]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Library ALI
        </CCardHeader>
        <CCardBody>
          <CChartLine
            type="line"
            datasets={[
              {
                label: 'Data One',
                backgroundColor: 'rgb(228,102,81,0.9)',
                data: [30, 39, 10, 50, 30, 70, 35, 30, 70, 35]
              },
              {
                label: 'Data Two',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [39, 97, 40, 35, 40, 20, 45, 30, 70, 35]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
        </CCardBody>
      </CCard>
      </CCardGroup>
    </div>
  )
}

export default CNN