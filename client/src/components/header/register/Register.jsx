import React, { useState } from 'react'
import Input from './Input.jsx'

import { registerUser } from '../../../services/registerUser.js'

function Register () {
  const [formData, setFormData] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    const response = Object.fromEntries(new window.FormData(e.target))

    if (!response) {
      return
    }

    setFormData(response)
    registerUser(formData)
  }

  return (
    <div className='flex-center'>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit} className='register__form'>
        <Input string='First Name' value='firstName' placeholder='Jhon' />
        <Input string='Last Name' value='lastName' placeholder='Doe' />
        <Input string='Username' value='username' placeholder='isDoe' />
        <Input
          string='Email'
          value='email'
          placeholder='jhondoe@mail.com'
          type='email'
        />
        <Input
          string='Password'
          value='password'
          placeholder='******'
          type='password'
        />
        <Input
          string='Recovery Question?'
          value='question'
          placeholder=''
          type='question'
          isTypeSelect
        />
        <Input string='Answer' value='answer' placeholder='...' type='text' />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  )
}

export default Register
