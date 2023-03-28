/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getUserPermission } from '../services/getUserPermission.js'
import { HelperContext } from '../context/HelperContext.jsx'

// import { useDataUser } from '../hooks/useDataUser.js'

// component
function Dashboard () {
  const { setInDashboard } = useContext(HelperContext)
  const navigate = useNavigate()
  const [informationRaw, setInformationRaw] = useState({})

  useEffect(() => {
    const getDataPostValidation = async () => {
      try {
        const { isAuthorized, localData, isNotAuthorized } =
          await getUserPermission(navigate)

        if (isNotAuthorized) {
          console.log('user has been not authorized:', isNotAuthorized)
          return navigate('/login', { replace: true })
        }
        if (!isAuthorized || !localData) return

        if (isAuthorized.data.status) {
          const gettingData = await axios.get(
            `http://localhost:3000/dashboard/user/${localData.auth.id}`
          )
          setInDashboard(true)

          const user = {
            firstname: gettingData.data.user.firstName,
            lastname: gettingData.data.user.lastName,
            email: gettingData.data.user.email,
            avatar: gettingData.data.user.avatarImage
          }

          setInformationRaw(user)
        }
      } catch (e) {
        console.log(e.message)
      }
    }
    getDataPostValidation()
  }, [])

  return (
    <section className='p-5'>
      <div className='grid grid-cols-5 grid-rows-3 gap-5 grid-flow-row mt-32 border-2 border-red-100'>
        <picture className='w-full h-full grid items-center p-3 col-start-1 col-span-1'>
          <img
            className='w-48 h-48 rounded-full object-cover mx-auto'
            src={`${informationRaw ? informationRaw.avatar : ''}`}
            alt='profile random image'
          />
        </picture>
        <div className='p-3 col-start-1 col-span-1 text-center'>
          <div className='flex flex-col justify-center align-middle'>
            <span className='block text-[14px] font-bold'>First Name:</span>
            <p className='text-[18px] my-1'>{informationRaw.firstname}</p>
          </div>

          <div className='flex flex-col justify-center align-middle'>
            <span className='block text-[14px] font-bold'>Last Name:</span>
            <p className='text-[18px] my-1'>{informationRaw.lastname}</p>
          </div>

          <div className='flex flex-col justify-center align-middle'>
            <span className='block text-[14px] font-bold'>Email:</span>
            <p className='text-[18px] my-1'>{informationRaw.email}</p>
          </div>
        </div>
        <div className='col-start-1 row-start-3 col-span-1'>
          <ul>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
          </ul>
        </div>

        <div className='col-start-2 row-start-1 col-span-full'>
          <div className='data-title-container'>
            <h2 className='data-title'>Information Keys</h2>
            <button className='data-new-button'>New Key</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
