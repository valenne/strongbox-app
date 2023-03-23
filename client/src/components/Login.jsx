import React, { useRef, useEffect } from 'react'
import Input from './header/register/Input.jsx'
import { loginUser } from '../services/loginUser.js'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

// hook
import { useCredential } from '../hooks/useDataLogin.js'

function Login () {
  const userRef = useRef(null)
  const navigate = useNavigate()
  const { error, setResponseLogin, responseLogin } = useCredential()

  const handleLogin = e => {
    e.preventDefault()
    const loginData = Object.fromEntries(new window.FormData(e.target))
    loginUser(loginData).then(res => {
      setResponseLogin(res)
      if (!res.data.error) {
        userRef.current = responseLogin
      }
    })
  }

  useEffect(() => {
    if (userRef.current) {
      const toastId = toast.loading('Loading...')

      setTimeout(() => {
        toast.dismiss(toastId)
        toast.success('User logged in successfully')

        setTimeout(() => {
          return navigate('/dashboard', { replace: true })
        }, 2000)
      }, 2500)
    }
  }, [userRef.current])

  return (
    <div className='flex flex-col justify-center align-middle'>
      <Toaster position='top-right' reverseOrder={false} />

      <h2 className='text-cyan-50 text-2xl p-5 text-center mt-10 mb-5'>
        Login
      </h2>
      <form
        onSubmit={handleLogin}
        className='min-w-4xl p-5 m-auto rounded-xl bg-[#3F3F50]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'
      >
        <div className='flex flex-col gap-3 min-w-full'>
          <Input string='Username' value='username' placeholder='isDoe' />
          <span
            className={`${
              error?.match(/user/)
                ? 'block h-5 opacity-1 text-red-500 px-5'
                : 'block h-5 opacity-0'
            }`}
          >
            {error?.match(/user/) && 'Username is not valid'}
          </span>
          <Input
            string='Password'
            value='password'
            placeholder='******'
            type='password'
          />
          <span
            className={`${
              error?.match(/password/)
                ? 'block h-5 opacity-1 text-red-500 px-5'
                : 'block h-5 opacity-0'
            }`}
          >
            {error?.match(/password/) && 'Password not matched'}
          </span>
          <div className='m-auto w-full px-5 grid place-items-center'>
            <button
              className='w-full py-3 px-5 bg-[#271F30] hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg'
              type='submit'
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
