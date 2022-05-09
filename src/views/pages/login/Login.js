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
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function Login() {
  const navigate = useNavigate()
  const [loginInput, setLogin] = useState({
    name: '',
    password: '',
    error_list: [],
  })
  const handleInput = (e) => {
    e.persist()
    setLogin({ ...loginInput, [e.target.name]: e.target.value })
  }
  const loginSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }
    axios.get('/sanctum/csrf-cookie').then((response) => {
      axios.post('/api/login', data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('auth_name', res.data.username)
          swal('Witaj!', res.data.message, 'success')
          navigate('/')
        } else if (res.data.status === 401) {
          swal('Uwaga!', res.data.message, 'warning')
        } else {
          setLogin({ ...loginInput, error_list: res.data.val_errors })
        }
      })
    })
  }
  return (
    <>
      <Home />
      <div className="bg-dark min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol className="d-flex justify-content-center align-items-center">
              <CCard className="mx-12">
                <CCardBody className="col-md-auto">
                  <CForm onSubmit={loginSubmit}>
                    <h3 className="text-center">Logowanie</h3>
                    <span className="text-danger small">{loginInput.error_list.email}</span>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        name="email"
                        onChange={handleInput}
                        value={loginInput.email}
                        floatingLabel="Email"
                        placeholder="Email"
                        style={{ height: '55px' }}
                      />
                    </CInputGroup>
                    <span className="text-danger small">{loginInput.error_list.password}</span>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        onChange={handleInput}
                        value={loginInput.password}
                        floatingLabel="Hasło"
                        placeholder="Hasło"
                        autoComplete="current-password"
                        style={{ height: '55px' }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="outline-success" className="px-4 btn-sm">
                          Zaloguj się
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link color="link" className="px-0 btn-sm text-secondary" to="/register">
                          Nie masz konta?
                        </Link>
                      </CCol>
                    </CRow>
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

export default Login
