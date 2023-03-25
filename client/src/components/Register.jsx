/* eslint-disable multiline-ternary */
import React from 'react'
import Input from './header/register/Input.jsx'
import { useHandleRegister } from '../hooks/useHandleRegister.js'
import { useNavigate, useLocation } from 'react-router-dom'

// return if the obj has a value inside
const objectHasData = obj => {
  return Object.keys(obj).length
}

function Register () {
  const navigate = useNavigate()
  const { loading, error, registerProcess, saveData } =
    useHandleRegister(navigate)
  const { pathname } = useLocation()

  console.log(pathname)

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
        <div className='flex flex-col justify-center align-middle'>
          {loadingAnimation()}
        </div>
      ) : (
        <div className='w-full h-screen'>
          <div className='flex flex-col justify-center align-middle w-fit m-auto'>
            <h2 className='text-cyan-50 text-2xl p-5 text-center mt-32 mb-5'>
              Register Form
            </h2>
            <form
              className='w-[500px] p-5 rounded-xl bg-[#3F3F50] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'
              onSubmit={handleSubmit}
            >
              <div className='grid lg:grid-cols-2 gap-2 px-2 md:grid-cols-2 sm:grid-cols-1'>
                <Input
                  string='First Name'
                  value='firstName'
                  placeholder='Jhon'
                />
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

                <div
                  className={`m-auto w-full px-5 grid place-items-center mt-5 ${
                    pathname === '/register' ? 'hidden' : 'block'
                  }`}
                >
                  <button
                    className='w-full py-3 px-5 bg-[#271F30] hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg border-1 border-solid border-transparent'
                    style={{
                      // border: '1px solid transparent',
                      borderColor: error
                        ? 'border-red-700'
                        : 'border-transparent'
                    }}
                    type='submit'
                  >
                    {loading ? 'Loading...' : 'Sign in'}
                  </button>
                </div>

                <p>{error ?? error}</p>
              </div>
              <div className='m-auto w-full px-5 grid place-items-center mt-5'>
                <button
                  className='w-full py-3 px-5 bg-[#271F30] hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg border-1 border-solid border-transparent'
                  style={{
                    // border: '1px solid transparent',
                    borderColor: error ? 'red' : 'transparent'
                  }}
                  type='submit'
                >
                  {loading ? 'Loading...' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Register
