import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterScreen from '../Modules/Auth/Screens/register/RegisterScreen'
import Login from '../Modules/Auth/Screens/login/Login'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default Router