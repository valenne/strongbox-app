import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HelperContext } from '../../context/HelperContext.jsx'
import { useAxios } from '../../hooks/useAxios.js'
import { axiosKeyHandle } from '../../services/axiosHandle.js'
import {
  userNotHavePermission,
  validatPinData
} from './../../assets/js/helperFunctions'
import RegisterKeyInput from './RegisterKeyInput.jsx'

function FormNewKey () {
  const [dataNewKey, setDataNewKey] = useState(null)
  const { setInDashboard, pathname, inputCheck, isCardChange } =
    useContext(HelperContext)
  const navigate = useNavigate()
  const { axiosUserPermission, isAuthorized, id } = useAxios(pathname)

  useEffect(() => {
    const userPermission = async () => {
      if (isAuthorized && id) {
        try {
          const res = await axiosUserPermission()

          if (Object.keys(res).length === 0) {
            return
          }
          setInDashboard(true)
          return
        } catch (err) {
          console.log(err.message)
          setInDashboard(false)
          userNotHavePermission(isAuthorized, pathname, navigate)
        }
      } else {
        setInDashboard(false)
        userNotHavePermission(isAuthorized, pathname, navigate)
      }
    }

    // create data
    if (dataNewKey && !isCardChange.status) {
      axiosKeyHandle(id, dataNewKey, 'post', 'card')
        .then(data => {
          console.log(data)
          navigate('/dashboard', { replace: true })
        })
        .catch(e => e.message)
    } else if (
      dataNewKey &&
      isCardChange.status &&
      isCardChange.verb === 'put'
    ) {
      axiosKeyHandle(id, dataNewKey, 'put', 'card')
        .then(data => {
          console.log(data)
          navigate('/dashboard', { replace: true })
        })
        .catch(e => e.message)
    }

    userPermission()
  }, [dataNewKey])

  const handleLogin = e => {
    e.preventDefault()
    const response = Object.fromEntries(new FormData(e.target))

    if (inputCheck) {
      console.log(inputCheck)
      if (!Object.keys(response).length) return

      const { isNum } = validatPinData(response)

      if (!isNum) {
        return window.alert('Pin should have only numbers')
      }
    }
    setDataNewKey(response)
  }

  return (
    <section id='createKey'>
      <div className='flex flex-col justify-center align-middle'>
        {/* <Toaster position='top-center' reverseOrder={false} /> */}
        <div className='w-fit mt-32 mx-auto'>
          <h2 className='text-cyan-50 text-2xl p-5 text-center mt-10 mb-5'>
            {!isCardChange.status ? 'Create a Key' : 'Update a Key'}
          </h2>
          <form
            onSubmit={handleLogin}
            className='min-w-4xl p-5 m-auto rounded-xl bg-[#3F3F50]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'
          >
            <div className='flex flex-col min-w-full'>
              <RegisterKeyInput />

              <div className='m-auto w-full px-5 grid place-items-center'>
                <button
                  className='w-full py-3 px-5 bg-[#271F30] hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg'
                  type='submit'
                >
                  {!isCardChange.status ? 'Create' : 'Update'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FormNewKey
