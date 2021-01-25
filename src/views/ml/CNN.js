import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'

const CNN = () => {
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
                data: [30, 39, 10, 50, 30, 70, 35]
              },
              {
                label: 'Data Two',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [39, 80, 40, 35, 40, 20, 45]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels="months"
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
                data: [30, 39, 10, 50, 30, 70, 35]
              },
              {
                label: 'Data Two',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [39, 80, 40, 35, 40, 20, 45]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels="months"
          />
        </CCardBody>
      </CCard>
      </CCardGroup>
    </div>
  )
}

export default CNN