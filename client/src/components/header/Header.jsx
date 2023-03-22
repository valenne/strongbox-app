import React, { useContext } from 'react'
import Navbar from './nav/Navbar.jsx'
import { HelperContext } from '../../context/HelperContext.jsx'

function Header () {
  const { inDashboard, setInDashboard } = useContext(HelperContext)
  return (
    <header>
      <Navbar onDashboard={inDashboard} setInDashboard={setInDashboard} />
    </header>
  )
}

export default Header
