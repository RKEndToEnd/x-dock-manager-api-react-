import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import axios from 'axios'
import swal from 'sweetalert'

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false)
  const [load, setLoad] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('/api/authCheck').then((res) => {
      if (res.status === 200) {
        setAuth(true)
      }
      setLoad(false)
    })
    return () => {
      setAuth(false)
    }
  }, [])

  axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    if (err.response.status === 401) {
      swal(
        'Uwaga! Dostęp tylko dla zalogowanych użytkowników!',
        err.response.data.message,
        'warning',
      )
      navigate('/login')
    }
    return Promise.reject(err)
  })
  if (load) {
    return <h5 className="text-info opacity-50">Ładowanie...</h5>
  }
  const authCheck = auth
  return authCheck ? <DefaultLayout /> : <Navigate to="/login" />
}

export default PrivateRoutes
