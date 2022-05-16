import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAirplaneMode,
  cilAirplay,
  cilCheckAlt,
  cilCheckCircle,
  cilIndustry,
  cilLayers,
  cilLineSpacing,
  cilList,
  cilSettings,
  cilShieldAlt,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Panel',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Operacje',
    to: '/ops',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Control Tower',
        to: '/ops/control-tower',
        icon: <CIcon icon={cilAirplaneMode} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Trasy przeładowane',
        to: '/ops/loaded-tracks',
        icon: <CIcon icon={cilCheckAlt} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Zarządzanie',
    to: '/management',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Użytkownicy',
        to: '/users/list',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Depoty',
        to: '/management/depots',
        icon: <CIcon icon={cilIndustry} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Rampy',
        to: '/management/ramps',
        icon: <CIcon icon={cilAirplay} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Ustawienia',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Statusy ramp',
        to: '/settings/ramps',
        icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Poziomy dostępów',
        to: '/settings/access-levels',
        icon: <CIcon icon={cilShieldAlt} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Uprawnienia dostępów',
        to: '/settings/users-permissions',
        icon: <CIcon icon={cilLineSpacing} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
