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
    <section className='section-dashboard'>
      <div className='dashboard-container dboard-wrapper'>
        <picture className='image-container image'>
          <img
            className='profile-image image'
            src={`${informationRaw ? informationRaw.avatar : ''}`}
            alt='profile random image'
          />
        </picture>
        <div className='user-information data'>
          <div className='user-tag'>
            <span style={{ display: 'block' }}>First Name:</span>
            <p>{informationRaw.firstname}</p>
          </div>

          <div className='user-tag'>
            <span>Last Name:</span>
            <p>{informationRaw.lastname}</p>
          </div>

          <div className='user-tag'>
            <span>Email:</span>
            <p>{informationRaw.email}</p>
          </div>
        </div>
        <div className='categories'>
          <ul>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
          </ul>
        </div>

        <div className='data-container dashboard'>
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
