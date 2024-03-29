import React, { useContext } from 'react'
import { HelperContext } from '../../context/HelperContext.jsx'
import Navbar from './nav/Navbar.jsx'

function Header () {
  const { inDashboard, setInDashboard } = useContext(HelperContext)
  return (
    <section id='header' className='z-50 bg-[#271f30] w-full h-[88px] fixed'>
      <header className='w-full h-min'>
        <Navbar onDashboard={inDashboard} setInDashboard={setInDashboard} />
      </header>
    </section>
  )
}

export default Header

// quede arreglando register responsive, luego seguir con login, para continuar con dashboard
