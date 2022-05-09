import React, { useState } from 'react'
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
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  })
  const navigate = useNavigate()
  const fetchInput = (e) => {
    e.persist()
    setRegister({ ...registerInput, [e.target.name]: e.target.value })
  }
  const Submit = (e) => {
    e.preventDefault()
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    }
    axios.get('/sanctum/csrf-cookie').then((response) => {
      axios.post('/api/register', data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('auth_name', res.data.username)
          swal('Konto zostało utworzone', res.data.message, 'success')
          navigate('/')
        } else {
          setRegister({ ...registerInput, error_list: res.data.val_errors })
        }
      })
    })
  }
  return (
    <>
      <Home />
      <div className="bg-dark min-vh-100 d-flex flex-row align-items-center small">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol className="d-flex justify-content-center align-items-center">
              <CCard className="mx-12">
                <CCardBody className="col-md-auto">
                  <CForm onSubmit={Submit}>
                    <h3 className="text-center">Rejestracja</h3>
                    <span className="text-danger small">{registerInput.error_list.name}</span>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        floatingLabel="Nazwa użytkownika"
                        placeholder="Nazwa użytkownika"
                        name="name"
                        style={{ height: '55px' }}
                        onChange={fetchInput}
                        value={registerInput.name}
                      />
                    </CInputGroup>
                    <span className="text-danger small">{registerInput.error_list.email}</span>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        type="email"
                        floatingLabel="Email"
                        placeholder="Email"
                        name="email"
                        style={{ height: '55px' }}
                        onChange={fetchInput}
                        value={registerInput.email}
                      />
                    </CInputGroup>
                    <span className="text-danger small">{registerInput.error_list.password}</span>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        floatingLabel="Hasło"
                        placeholder="Hasło"
                        name="password"
                        style={{ height: '55px' }}
                        onChange={fetchInput}
                        value={registerInput.password}
                      />
                    </CInputGroup>
                    {/*<CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        floatingLabel="Powtórz hasło"
                        placeholder="Powtórz Hasło"
                        name="confirmPassword"
                        style={{ height: '55px' }}
                        onChange={fetchInput}
                        value={registerInput.confirmPassword}
                      />
                    </CInputGroup>*/}
                    <div className="d-grid">
                      <CButton type="submit" color="outline-success" className="btn-sm">
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
