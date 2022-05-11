import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CContainer, CHeader, CHeaderNav, CNavItem } from '@coreui/react'
import axios from 'axios'
import swal from 'sweetalert'

function AppHeader() {
  const navigate = useNavigate()
  const logout = (e) => {
    e.preventDefault()
    axios.post('/api/logout').then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_name')
        swal('Do zobaczenia!', res.data.message, 'success')
        navigate('/')
      } else {
      }
    })
  }
  var AuthNav = ''
  if (!localStorage.getItem('auth_token')) {
    AuthNav = (
      <CHeaderNav className="d-none d-md-flex me-auto">
        <CNavItem>
          <Link
            className="text-decoration-none text-white"
            to="/"
            style={{ marginRight: 10 }}
            component={NavLink}
          >
            x-dock Manager
          </Link>
        </CNavItem>
        <CNavItem>
          <Link className="text-decoration-none text-white" to="/login" style={{ marginRight: 10 }}>
            Logowanie
          </Link>
        </CNavItem>
        <CNavItem>
          <Link
            className="text-decoration-none text-white"
            to="/register"
            style={{ marginRight: 10 }}
          >
            Rejestracja
          </Link>
        </CNavItem>
      </CHeaderNav>
    )
  } else {
    AuthNav = (
      <CHeaderNav className="d-none d-md-flex me-auto">
        <CNavItem>
          <Link
            className="text-decoration-none text-white"
            to="/dashboard"
            style={{ marginRight: 10 }}
            component={NavLink}
          >
            x-dock Manager
          </Link>
        </CNavItem>
        <CNavItem>
          <Link
            className="text-decoration-none text-white"
            onClick={logout}
            style={{ marginRight: 10 }}
            to="#"
          >
            Wyloguj
          </Link>
        </CNavItem>
      </CHeaderNav>
    )
  }

  return (
    <CHeader className="bg-dark">
      <CContainer fluid>{AuthNav}</CContainer>
    </CHeader>
  )
}

export default AppHeader
