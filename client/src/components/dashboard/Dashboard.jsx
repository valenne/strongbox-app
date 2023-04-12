/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userNotHavePermission } from '../../assets/js/helperFunctions.js'
import { HelperContext } from '../../context/HelperContext.jsx'
import { useAxios } from '../../hooks/useAxios.js'
import CardKey from './CardKey.jsx'

// component
function Dashboard () {
  const { setInDashboard, pathname } = useContext(HelperContext)
  const [userData, setUserData] = useState({})
  const [userKeys, setUserKeys] = useState([])
  const navigate = useNavigate()
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
        }
      } else {
        userNotHavePermission(isAuthorized, pathname, navigate)
      }
    }

    userPermission()
  }, [setUserKeys])

  // userKeys && userKeys.map(collection => console.log(collection.categoryImg))

  return (
    <section id='dashboard' className='p-5'>
      <div className='min-w-full min-h-fit grid grid-cols-5 gap-5 grid-flow-row mt-32'>
        <picture className='w-full min-h-fit grid items-center p-3 col-start-1 col-span-1'>
          <img
            className='w-48 h-48 rounded-full object-cover mx-auto'
            src={`${userData ? userData.avatar : ''}`}
            alt='profile random image'
          />
        </picture>
        <div className='min-h-fit p-3 col-start-1 col-span-1 text-center'>
          <div className='flex flex-col justify-center align-middle'>
            <span className='block text-[14px] font-bold'>First Name:</span>
            <p className='text-[18px] my-1'>{userData.firstname}</p>
          </div>

          <div className='flex flex-col justify-center align-middle'>
            <span className='block text-[14px] font-bold'>Last Name:</span>
            <p className='text-[18px] my-1'>{userData.lastname}</p>
          </div>

          <div className='flex flex-col justify-center align-middle mb-8'>
            <span className='block text-[14px] font-bold'>Email:</span>
            <p className='text-[18px] my-1'>{userData.email}</p>
          </div>
          <span className='block w-[90%] border-[1px] border-cyan-50 mx-auto px-3' />
          <div className='min-h-fit col-start-1 row-start-3 col-span-1 mt-8'>
            <h3>Categories</h3>
            <ul className='grid grid-cols-2'>
              {userKeys &&
                userKeys.map((collection, key) => (
                  <li key={key}>{collection.category}</li>
                ))}
            </ul>
          </div>
        </div>
        {/* <div className='min-h-fit col-start-1 row-start-3 col-span-1'>
          <ul>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
            <li>categorie 1</li>
          </ul>
        </div> */}

        <div className='w-full min-h-fit col-start-2 row-start-1 col-span-full'>
          <div className='h-full text-center flex flex-col justify-center gap-3 '>
            <h2 className='self-center text-4xl font-semibold text-cyan-50 m-0'>
              Information Keys
            </h2>
            <a href='/create-key'>
              <button className='h-fit self-center bg-purple-900 rounded-md hover:bg-black hover:text-cyan-50 text-cyan-50  text-[14px] py-3 px-5 ease-out duration-300 font-bold'>
                New Key
              </button>
            </a>
          </div>
          <span className='block w-[90%] border-[1px] border-cyan-50 mx-auto px-3 mb-5' />
        </div>
        <div className='w-full min-h-fit col-start-2 row-start-2 mt-20 col-span-full'>
          <div className='w-full h-full flex flex-row flex-wrap gap-6 mx-auto p-6'>
            {userKeys &&
              userKeys.map((collection, key) => (
                <div
                  key={key}
                  className='border-2 border-black w-max rounded-md overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'
                >
                  <CardKey
                    src={collection.categoryImg}
                    alt={`contiene imagen con tematica ${collection.category}`}
                    data={collection}
                  />
                </div>
              ))}
          </div>

          {/* {userKeys &&
              userKeys.map((collection, key) => (
                <div key={key}>
                  <img src={collection.categoryImg} alt='imagen de targeta' />
                </div>
              ))} */}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
