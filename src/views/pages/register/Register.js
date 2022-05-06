import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Home from '../home/Home'

const Register = () => {
  return (
    <>
      <Home />
      <div className="bg-dark min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol className="d-flex justify-content-center align-items-center">
              <CCard className="mx-12">
                <CCardBody className="col-md-auto">
                  <CForm>
                    <h3 className="text-center">Rejestracja</h3>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        floatingLabel="Nazwa użytkownika"
                        placeholder="Nazwa użytkownika"
                        autoComplete="username"
                        style={{ height: '55px' }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        type="email"
                        floatingLabel="Email"
                        placeholder="Email"
                        autoComplete="email"
                        style={{ height: '55px' }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        floatingLabel="Hasło"
                        placeholder="Hasło"
                        autoComplete="new-password"
                        style={{ height: '55px' }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        floatingLabel="Powtórz hasło"
                        placeholder="Powtórz Hasło"
                        autoComplete="new-password"
                        style={{ height: '55px' }}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="outline-success" className="btn-sm">
                        Utwórz konto
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default Register
