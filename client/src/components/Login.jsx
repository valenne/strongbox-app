import React, { useContext } from 'react'
import Input from './header/register/Input.jsx'
import { loginUser } from '../services/loginUser.js'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

// hook
import { useCredential } from '../hooks/useDataLogin.js'

// context
import { UserDataContext } from '../context/UserDataContext.jsx'

function Login () {
  const { loginInfo } = useContext(UserDataContext)
  const navigate = useNavigate()
  const { error, setResponseLogin } = useCredential()

  const handleLogin = e => {
    e.preventDefault()
    const loginData = Object.fromEntries(new window.FormData(e.target))
    loginUser(loginData).then(res => {
      setResponseLogin(res)
    })

    // toast alert
    if (loginInfo.current) {
      const toastId = toast.loading('Loading...')

      setTimeout(() => {
        toast.dismiss(toastId)
        toast.success('User logged in successfully')

        setTimeout(() => {
          return navigate('/dashboard', { replace: true })
        }, 2000)
      }, 2500)
    }
  }

  return (
    <div className='flex-center'>
      <Toaster position='top-right' reverseOrder={false} />
      <form onSubmit={handleLogin} className='register__form'>
        <Input string='Username' value='username' placeholder='isDoe' />
        <span
          className={`${
            error?.match(/user/) ? 'errorInputVisible' : 'errorInputHidden'
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
            error?.match(/password/) ? 'errorInputVisible' : 'errorInputHidden'
          }`}
        >
          {error?.match(/password/) && 'Password not matched'}
        </span>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
