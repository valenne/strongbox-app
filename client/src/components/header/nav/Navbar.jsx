/* eslint-disable multiline-ternary */
import React from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { storageLogic, navbarPath } from '../../../data/dataExports.js'

function NavbarGeneral () {
  const { pathname } = useLocation()
  // const { inHome, inLogin, inRegister, inDashboard } = useLinksHidden(pathname)
  const { home, login, register, dashboard } = navbarPath

  return (
    <nav className='shadow-xl'>
      <ul className='flex gap-3 justify-end py-5 px-7 w-full h-full '>
        <li
          className={`text-cyan-50 ease-in duration-300 hover:text-cyan-600 font-semibold text-base h-12 flex items-center ${
            pathname === '/' ? 'hidden' : 'block'
          }`}
          id='homeLink'
        >
          <Link to={home.path}>{home.name}</Link>
        </li>

        <li
          className={`text-cyan-50 ease-in duration-300 hover:text-cyan-600 font-semibold text-base h-12 flex items-center ${
            pathname === '/login' ? 'hidden' : 'displayBlock'
          }`}
          id='loginLink'
        >
          <Link to={login.path}>{login.name}</Link>
        </li>
        <li
          className={`text-cyan-50 ease-in duration-300 hover:text-cyan-600 font-semibold text-base h-12 flex items-center  ${
            pathname === '/register' ? 'hidden' : 'displayBlock'
          }`}
          id='registerLink'
        >
          <Link to={register.path}>{register.name}</Link>
        </li>
        <li
          className={`text-cyan-50 ease-in duration-300 hover:text-cyan-600 font-semibold text-base h-12  flex items-center ${
            pathname === '/dashboard' ? 'hidden' : 'block'
          }`}
          id='homeLink'
        >
          <Link to={dashboard.path}>{dashboard.name}</Link>
        </li>
      </ul>
    </nav>
  )
}

function NavBarDashboard ({ setInDashboard }) {
  const navigate = useNavigate()

  const logout = () => {
    setInDashboard(false)
    storageLogic.deleteStorage('user')
    window.alert('Good Night')
    navigate('/login', { replace: true })
  }

  return (
    <nav className='shadow-xl'>
      <ul className='flex gap-3 justify-end py-5 px-7 w-full h-full'>
        <li
          className='text-cyan-50 ease-in duration-300 hover:text-cyan-600 font-semibold text-base h-12 flex items-center'
          id='userName'
        >
          <p>UserName</p>
        </li>
        <li className='text-cyan-50 ease-in duration-300 font-semibold text-base h-12 flex items-center'>
          <button
            className=' ease-in-out duration-300 px-4 py-2 rounded-md bg-purple-900 hover:bg-black hover:text-white '
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

function Navbar ({ onDashboard = false, setInDashboard }) {
  return onDashboard ? (
    <NavBarDashboard setInDashboard={setInDashboard} />
  ) : (
    <NavbarGeneral />
  )
}

export default Navbar
