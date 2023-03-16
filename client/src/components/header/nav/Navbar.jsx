import React from 'react'
import { navbarPath } from '../../../data/navbarPath.js'
import { Link, useLocation } from 'react-router-dom'

function Navbar () {
  const { pathname } = useLocation()
  // const { inHome, inLogin, inRegister, inDashboard } = useLinksHidden(pathname)
  const { home, login, register, dashboard } = navbarPath

  return (
    <nav>
      <ul className='navbar__container'>
        <li
          className={`navLinks ${
            pathname === '/' ? 'displayNone' : 'displayBlock'
          }`}
          id='homeLink'
        >
          <Link to={home.path}>{home.name}</Link>
        </li>

        <li
          className={`navLinks ${
            pathname === '/login' ? 'displayNone' : 'displayBlock'
          }`}
          id='loginLink'
        >
          <Link to={login.path}>{login.name}</Link>
        </li>
        <li
          className={`navLinks ${
            pathname === '/register' ? 'displayNone' : 'displayBlock'
          }`}
          id='registerLink'
        >
          <Link to={register.path}>{register.name}</Link>
        </li>
        <li
          className={`navLinks ${
            pathname === '/dashboard' ? 'displayNone' : 'displayBlock'
          }`}
          id='homeLink'
        >
          <Link to={dashboard.path}>{dashboard.name}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
