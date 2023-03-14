/* eslint-disable multiline-ternary */
import React from 'react'
import Input from './header/register/Input.jsx'
import { useHandleRegister } from '../hooks/useHandleRegister.js'
import { useNavigate } from 'react-router-dom'

// return if the obj has a value inside
const objectHasData = obj => {
  return Object.keys(obj).length
}

function Register () {
  const navigate = useNavigate()
  const { loading, error, registerProcess, saveData } =
    useHandleRegister(navigate)

  const handleSubmit = e => {
    e.preventDefault()
    const response = Object.fromEntries(new window.FormData(e.target))
    if (!response) return

    registerProcess(response)
  }

  const loadingAnimation = () => {
    setTimeout(() => {
      return navigate('/', { replace: true })
    }, 1000)
    return window.alert(
      `Hello ${saveData.current.firstName}, save your recovery password: ${saveData.current.recovery}`
    )
  }
  return (
    <>
      {objectHasData(saveData.current) ? (
        <div className='flex-center'>{loadingAnimation()}</div>
      ) : (
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
            <Input
              string='Answer'
              value='answer'
              placeholder='...'
              type='text'
            />
            <button
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent'
              }}
              type='submit'
            >
              {loading ? 'Loading...' : 'Buscar'}
            </button>

            <p>{error ?? error}</p>
          </form>
        </div>
      )}
    </>
  )
}

export default Register
