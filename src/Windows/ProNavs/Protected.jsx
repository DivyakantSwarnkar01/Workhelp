import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import UserPage from './UserPage';



const Protected = () => {
  const token = localStorage.getItem('token');

  return (
    token ? <UserPage /> : <Navigate to='/LogSign/Log_Sign' />
  )
}

export default Protected;