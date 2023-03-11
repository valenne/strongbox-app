import React from 'react'
import Input from './header/register/Input.jsx'

import { loginUser } from '../services/loginUser.js'

function Login () {
  const handleLogin = e => {
    e.preventDefault()
    const data = Object.fromEntries(new window.FormData(e.target))
    loginUser(data)
    console.log(data)
  }
  return (
    <div className='flex-center'>
      <form onSubmit={handleLogin} className='register__form'>
        <Input string='Username' value='username' placeholder='isDoe' />
        <Input
          string='Password'
          value='password'
          placeholder='******'
          type='password'
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
