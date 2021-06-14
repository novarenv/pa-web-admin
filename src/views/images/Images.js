import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow
} from '@coreui/react'

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Images = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Images</h4>
              <div className="small text-muted">April 2020</div>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Jumlah Sampah</div>
              <strong>100,434,990</strong>
              <div>Juta</div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Jumlah Pelapor</div>
              <strong>7854</strong>
              <div>Juta</div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Kondisi</div>
              <strong>Berbahaya</strong>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Images
