/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  capitalize,
  userNotHavePermission
} from '../../assets/js/helperFunctions.js'
import { HelperContext } from '../../context/HelperContext.jsx'
import { useAxios } from '../../hooks/useAxios.js'
import CardKey from './CardKey.jsx'

// component
function Dashboard () {
  const [userData, setUserData] = useState({})
  const [userKeys, setUserKeys] = useState([])
  const navigate = useNavigate()
  const { setInDashboard, pathname } = useContext(HelperContext)
  const { axiosUserPermission, error, isAuthorized } = useAxios(
    pathname,
    navigate
  )

  useEffect(() => {
    const userPermission = async () => {
      if (isAuthorized && !error) {
        try {
          const res = await axiosUserPermission()

          if (Object.keys(res).length === 0) {
            return
          }
          setInDashboard(true)
          // user information side panel

          const user = {
            firstname: res.user.firstName,
            lastname: res.user.lastName,
            email: res.user.email,
            avatar: res.user.avatarImage
          }
          setUserKeys(res.userKeys)
          setUserData(user)
        } catch (err) {
          console.log(err)
          userNotHavePermission(isAuthorized, pathname, navigate)
        }
      } else {
        userNotHavePermission(isAuthorized, pathname, navigate)
      }
    }

    userPermission()
  }, [setUserKeys])

  const getCardId = e => {
    console.log(e.currentTarget.getAttribute('data-id'))
  }

  // userKeys && userKeys.map(collection => console.log(collection.categoryImg))

  return (
    <section id='dashboard' className='p-5'>
      <div className='min-w-full min-h-fit grid grid-cols-5 gap-3 grid-flow-row mt-32 text-cyan-50'>
        <picture className='w-full min-h-fit grid items-center p-3 col-start-1 col-span-1'>
          <img
            className='w-48 h-48 rounded-full object-cover mx-auto'
            src={`${userData ? userData.avatar : ''}`}
            alt='profile random image'
          />
        </picture>
        <div className='min-h-fit p-3 col-start-1 col-span-1 text-center'>
          <div className='flex flex-col justify-center align-middle'>
            <h3 className='block text-lg font-bold text-cyan-50'>
              First Name:
            </h3>
            <p className='text-lg my-1 text-gray-400'>
              {userData.firstname && capitalize(userData.firstname)}
            </p>
          </div>

          <div className='flex flex-col justify-center align-middle'>
            <h3 className='block text-lg font-bold text-cyan-50'>Last Name:</h3>
            <p className='text-lg my-1 text-gray-400'>
              {userData.lastname && capitalize(userData.lastname)}
            </p>
          </div>

          <div className='flex flex-col justify-center align-middle mb-8'>
            <h3 className='block text-lg font-bold text-cyan-50'>Email:</h3>
            <p className='text-lg my-1 text-gray-400'>{userData.email}</p>
          </div>
          <span className='block w-[90%] border-[1px] border-[#3F3F50] mx-auto px-3' />
          <div className='min-h-fit col-start-1 row-start-3 col-span-1 mt-8'>
            <h3 className='block text-lg font-bold text-cyan-50'>Categories</h3>
            <ul className='grid grid-cols-1 gap-2'>
              {userKeys &&
                userKeys.map((collection, key) => (
                  <li className='text-gray-400' key={key}>
                    {capitalize(collection.category)}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className='w-full min-h-fit col-start-2 row-start-1 col-span-full'>
          <div className='h-full text-center flex flex-col justify-center gap-3 '>
            <h2 className='self-center text-4xl font-semibold text-cyan-50 m-0 mb-3'>
              Information Keys
            </h2>
            <a href='/create-key'>
              <button className='h-fit self-center bg-purple-900 rounded-md hover:bg-black hover:text-cyan-50 text-cyan-50 text-md py-3 px-5 ease-out duration-300 font-bold'>
                New Key
              </button>
            </a>
          </div>
          <div className='px-10 w-full'>
            <span className='block w-full border-[1px] border-[#3F3F50] mx-auto mb-5' />
          </div>
        </div>
        <div className='w-full min-h-fit col-start-2 row-start-2 mt-10 col-span-full'>
          <div className='w-full h-full flex flex-row flex-wrap gap-6 p-10 mx-auto justify-evenly'>
            {userKeys &&
              userKeys.map((collection, key) => (
                <div
                  id='card'
                  key={key}
                  className='relative border-[1px] border-[#3F3F50] w-max rounded-md overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] hover:scale-[1.01] ease-in-out duration-300 group'
                  onClick={getCardId}
                  data-id={collection._id}
                >
                  <CardKey
                    src={collection.categoryImg}
                    alt={`contiene imagen con tematica ${collection.category}`}
                    data={collection}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
