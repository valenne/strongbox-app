import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  capitalize,
  userNotHavePermission
} from '../../assets/js/helperFunctions.js'
import { HelperContext } from '../../context/HelperContext.jsx'
import { useAxios } from '../../hooks/useAxios.js'
import CardKey from './CardKey.jsx'

// icon

// component
function Dashboard () {
  const [preDataDashboard, setPreDataDashboard] = useState({})
  const { setInDashboard, pathname } = useContext(HelperContext)
  const [selectedCard, setSelectedCard] = useState(null)

  const navigate = useNavigate()
  // custom hook
  const { axiosUserPermission, error, isAuthorized, axiosCardData } =
    useAxios(pathname)

  useEffect(() => {
    const userPermission = async () => {
      if (isAuthorized && !error) {
        try {
          const res = await axiosUserPermission()

          if (Object.keys(res).length === 0) {
            return
          }
          setInDashboard(true)
          setPreDataDashboard(res)
        } catch (err) {
          console.log(err)
          userNotHavePermission(isAuthorized, pathname, navigate)
        }
      } else if (error) {
        userNotHavePermission(isAuthorized, pathname, navigate)
      }
    }

    userPermission()
  }, [])

  return (
    <section id='dashboard' className='p-5'>
      <div className='min-w-full min-h-fit grid grid-cols-5 gap-3 grid-flow-row mt-32 text-cyan-50'>
        <picture className='w-full min-h-fit grid items-center p-3 col-start-1 col-span-1'>
          <img
            className='w-48 h-48 rounded-full object-cover mx-auto'
            src={`${
              preDataDashboard.user?.avatarImage
                ? preDataDashboard.user?.avatarImage
                : ''
            }`}
            alt='profile random image'
          />
        </picture>
        <div className='min-h-fit p-3 col-start-1 col-span-1 text-center'>
          <div className='flex flex-col justify-center align-middle'>
            <h3 className='block text-lg font-bold text-cyan-50'>
              First Name:
            </h3>
            <p className='text-lg my-1 text-gray-400'>
              {preDataDashboard.user?.firstname &&
                capitalize(preDataDashboard.user?.firstname)}
            </p>
          </div>

          <div className='flex flex-col justify-center align-middle'>
            <h3 className='block text-lg font-bold text-cyan-50'>Last Name:</h3>
            <p className='text-lg my-1 text-gray-400'>
              {preDataDashboard.user?.lastname &&
                capitalize(preDataDashboard.user?.lastname)}
            </p>
          </div>

          <div className='flex flex-col justify-center align-middle mb-8'>
            <h3 className='block text-lg font-bold text-cyan-50'>Email:</h3>
            <p className='text-lg my-1 text-gray-400'>
              {preDataDashboard.user?.email}
            </p>
          </div>
          <span className='block w-[90%] border-[1px] border-[#3F3F50] mx-auto px-3' />
          <div className='min-h-fit col-start-1 row-start-3 col-span-1 mt-8'>
            <h3 className='block text-lg font-bold text-cyan-50 mb-4'>
              Categories
            </h3>
            <ul className='grid grid-cols-1 gap-2'>
              {preDataDashboard.userKeys &&
                preDataDashboard.userKeys.map((collection, key) => (
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
            <a href='/card'>
              <button className='h-fit self-center bg-purple-900 rounded-md hover:bg-black hover:text-cyan-50 text-cyan-50 text-md py-3 px-5 ease-out duration-300 font-bold'>
                New Key
              </button>
            </a>
          </div>
          <div className='px-10 w-full'>
            <span className='block w-full border-[1px] border-[#3F3F50] mx-auto mb-5' />
          </div>
        </div>

        <div className='w-full min-h-fit col-start-2 row-start-2 mt-10 col-span-full relative '>
          {/* buttons */}
          <div className='h-fit flex flex-row justify-center gap-4 mx-auto col-start-2 row-start-2 row-end-2 mt-2 mb-4'>
            <button className=' bg-purple-900 rounded-md hover:bg-black  text-cyan-50 text-md py-3 px-5 ease-out duration-300 font-bold'>
              Orden A-Z
            </button>
            <button className=' bg-purple-900 rounded-md hover:bg-black  text-cyan-50 text-md py-3 px-5 ease-out duration-300 font-bold'>
              Orden Z-A
            </button>
            <button className=' bg-purple-900 rounded-md hover:bg-black  text-cyan-50 text-md py-3 px-5 ease-out duration-300 font-bold'>
              Orden by Date
            </button>
          </div>
          <div className='w-full h-full flex flex-row flex-wrap gap-6 px-20 py-10 justify-around'>
            {preDataDashboard.userKeys &&
              preDataDashboard.userKeys.map((collection, key) => (
                <div className='card' key={collection._id}>
                  <CardKey
                    src={collection.categoryImg}
                    alt={`contiene imagen con tematica ${collection.category}`}
                    data={collection}
                    onClick={() => setSelectedCard(collection._id)}
                    isSelected={collection._id === selectedCard}
                    pin={
                      collection._id === selectedCard && {
                        hasPin: collection.hasPin,
                        id: collection._id
                      }
                    }
                    axiosCardData={axiosCardData}
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
