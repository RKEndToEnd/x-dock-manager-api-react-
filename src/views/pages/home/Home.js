import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CContainer, CHeader, CHeaderNav, CNavItem } from '@coreui/react'

const AppHeader = () => {
  return (
    <CHeader className="bg-dark">
      <CContainer fluid>
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
            <Link
              className="text-decoration-none text-white"
              to="/login"
              style={{ marginRight: 10 }}
            >
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
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
