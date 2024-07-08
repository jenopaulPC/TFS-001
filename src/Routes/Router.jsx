import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterScreen from '../Modules/Auth/Screens/register/RegisterScreen'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/register' element={<RegisterScreen />} />
        </Routes>
    </div>
  )
}

export default Router