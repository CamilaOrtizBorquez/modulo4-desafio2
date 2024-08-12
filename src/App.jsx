import { useState } from 'react'

import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Register } from './component/Register'
import { Login } from './component/Login'
import { Footer } from './component/Footer'

function App() {
 
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <Register></Register>
      {/* <Login></Login> */}
      <Footer></Footer> 
    </>
  )
}

export default App
