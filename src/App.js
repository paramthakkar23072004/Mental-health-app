import React from 'react'
import Front from './Components/Front/Front'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Forgot from './Components/Forgot/Forgot'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Front}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/forgot' Component={Forgot}/>
      </Routes>
    </div>
  )
}

export default App