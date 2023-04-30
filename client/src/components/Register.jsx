/* eslint-disable multiline-ternary */
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useHandleRegister } from '../hooks/useHandleRegister.js'
import RegisterInput from './register/RegisterInput.jsx'

// return if the obj has a value inside
const objectHasData = obj => {
  return Object.keys(obj).length
}

function Register () {
  const navigate = useNavigate()
  const { loading, error, registerProcess, saveData } = useHandleRegister()
  const { pathname } = useLocation()

  console.log(pathname)

  const handleSubmit = e => {
    e.preventDefault()
    // const response = Object.fromEntries(new window.FormData(e.target))
    const formData = Object.fromEntries(new FormData(e.target))

    if (!formData) return

    registerProcess(formData)
  }

  const loadingAnimation = () => {
    setTimeout(() => {
      return navigate('/', { replace: true })
    }, 1000)
    return window.alert(
      `Hello ${saveData.current.firstName}, save your recovery password: "${saveData.current.recovery}"`
    )
  }
  return (
    <>
      {objectHasData(saveData.current) ? (
        <div className='flex flex-col justify-center align-middle'>
          {loadingAnimation()}
        </div>
      ) : (
        <section id='register' className='w-full h-screen'>
          <div className='flex flex-col justify-center align-middle w-fit m-auto'>
            <h2 className='text-cyan-50 text-2xl p-5 text-center mt-32 mb-5'>
              Register Form
            </h2>
            <form
              className='w-[500px] p-5 rounded-xl bg-[#3F3F50] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'
              onSubmit={handleSubmit}
            >
              <div className='grid gap-2 px-2 sm:grid-cols-1'>
                <RegisterInput />

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

                <p className='text-red-500 mx-auto'>{error ?? error}</p>
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
                  {loading ? 'Loading...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  )
}

export default Register
