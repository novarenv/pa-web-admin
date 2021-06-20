import React from 'react'
import gallery from '../../assets/gallery/image-1.png'
import '../../css/Images.css'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow
} from '@coreui/react'


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
              <div className="images-1">
                <img src={gallery} alt="image-1" width={300} height={200}></img>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="images-2">
                <img src={gallery} alt="image-2" width={300} height={200}></img>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="images-3">
                <img src={gallery} alt="image-3" width={300} height={200}></img>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="images-3">
                <img src={gallery} alt="image-3" width={300} height={200}></img>
              </div>
            </CCol>
          </CRow>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="images-1">
                <img src={gallery} alt="image-1" width={300} height={200}></img>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="images-2">
                <img src={gallery} alt="image-2" width={300} height={200}></img>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="images-3">
                <img src={gallery} alt="image-3" width={300} height={200}></img>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="images-3">
                <img src={gallery} alt="image-3" width={300} height={200}></img>
              </div>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Images
