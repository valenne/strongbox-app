import React, { useContext } from 'react'
import Navbar from './nav/Navbar.jsx'
import { HelperContext } from '../../context/HelperContext.jsx'

function Header () {
  const { inDashboard, setInDashboard } = useContext(HelperContext)
  return (
    <section id='header'>
      <header className='z-10'>
        <Navbar onDashboard={inDashboard} setInDashboard={setInDashboard} />
      </header>
    </section>
  )
}

export default Header
