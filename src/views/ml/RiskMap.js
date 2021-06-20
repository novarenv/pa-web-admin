import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
  CLabel,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton
} from '@coreui/react'

// fileSelectedHandler = event => {
//   console.log(event.target.files[0]);
// }

const RiskMap = () => {
  return (
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Machine Learning</h4>
              <div className="small text-muted">April 2020</div>
            </CCol>
          </CRow>
          <div className="klasifikasi" display="flex">
          <CDropdown style={{display:'flex', justifyContent:'center'}}>
            <CDropdownToggle color="secondary">Klasifikasi</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          </div>
          <CRow>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div>
                <label>Sungai Kalimas</label>
              </div>
              <div className="uploadFike">
                <input type="file"></input>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <label>All Library</label>
              <div className="ActivationLayerGroup">
                <div className="label" style={{display:'flex'}}>
                    <CLabel>Activation Layer</CLabel>
                </div>
                <CDropdown style={{display:'flex',justifyContent:'left'}}>
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
              <div className="ActivationLayerGroup">
                <div className="label" style={{display:'flex'}}>
                    <CLabel>Epoch</CLabel>
                </div>
                <CDropdown style={{display:'flex',justifyContent:'left'}}>
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
              <div className="button" style={{paddingTop:20}}>
                <CButton color="primary">Secondary</CButton>
              </div>
              <div className="result" style={{paddingTop:20}}>
                <CLabel>Result</CLabel>
              </div>
              <div className="result" style={{paddingTop:10,display:'flex',justifyContent:'left'}}>
                <CLabel>Kelas                 : Plastik</CLabel>
              </div>
              <div className="result" style={{paddingTop:10,display:'flex',justifyContent:'left'}}>
                <CLabel>Risiko                : Sedang</CLabel>
              </div>
              <div className="result" style={{paddingTop:10,display:'flex',justifyContent:'left'}}>
                <CLabel>Ukuran Plastik        : 3.5%</CLabel>
              </div>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
            <label>All Library</label>
            <div className="ActivationLayerGroup">
                <div className="label" style={{display:'flex'}}>
                    <CLabel>Activation Layer</CLabel>
                </div>
                <CDropdown style={{display:'flex',justifyContent:'left'}}>
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
              <div className="ActivationLayerGroup">
                <div className="label" style={{display:'flex'}}>
                    <CLabel>Epoch</CLabel>
                </div>
                <CDropdown style={{display:'flex',justifyContent:'left'}}>
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
              <div className="button" style={{paddingTop:20}}>
                <CButton color="primary">Secondary</CButton>
              </div>
              <div className="result" style={{paddingTop:20}}>
                <CLabel>Result</CLabel>
              </div>
              <div className="result" style={{paddingTop:10,display:'flex',justifyContent:'left'}}>
                <CLabel>Kelas                 : Plastik</CLabel>
              </div>
              <div className="result" style={{paddingTop:10,display:'flex',justifyContent:'left'}}>
                <CLabel>Risiko                : Sedang</CLabel>
              </div>
              <div className="result" style={{paddingTop:10,display:'flex',justifyContent:'left'}}>
                <CLabel>Ukuran Plastik        : 3.5%</CLabel>
              </div>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
  )
}

export default RiskMap