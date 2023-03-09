import React from 'react'
import Anchor from './AnchorLink.jsx'
import { navbarPath } from '../../../data/navbarPath.js'

function Navbar () {
  const { home, login, register } = navbarPath
  return (
    <nav className='navbar__container'>
      <Anchor referTo={home.name} pathUrl={home.path} />
      <Anchor referTo={login.name} pathUrl={login.path} />
      <Anchor referTo={register.name} pathUrl={register.path} isBtn />
    </nav>
  )
}

export default Navbar
