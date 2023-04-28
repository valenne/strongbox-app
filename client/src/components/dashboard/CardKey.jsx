import React, { useState } from 'react'
import { BsFillUnlockFill } from 'react-icons/bs'
import { capitalize } from '../../assets/js/helperFunctions.js'
import { axiosKeyHandle } from '../../services/axiosHandle.js'
import { MenuPopover } from '../helperComponents/MenuPopover.jsx'

function CardKey ({ src, alt, data, onClick, isSelected, statusPin }) {
  const [dataPostVerification, setDataPostVerification] = useState({})
  const [error, setError] = useState('')
  const [scForm, setScForm] = useState(true)

  const getCardInfo = e => {
    e.preventDefault()

    const formCardPin = Object.fromEntries(new FormData(e.target))

    // card id
    const { id } = statusPin

    // without pin
    if (Object.keys(formCardPin).length === 0) {
      return axiosKeyHandle(id, undefined, 'get', 'dashboard/cards')
        .then(result => {
          setDataPostVerification(result)
          setScForm(false)
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Loading was done'))
    }

    // with pin
    const { pin } = formCardPin

    return axiosKeyHandle(id, pin, 'get', 'dashboard/cards')
      .then(result => {
        if (result.error) {
          setError('Wrong Pin')

          setTimeout(() => {
            setError('')
          }, 1000)
          return
        }
        setDataPostVerification(result)
        setScForm(false)
      })
      .catch(err => {
        console.log(err)
        window.alert('Wrong Pin')
      })
      .finally(() => console.log('Loading was done'))
  }

  return (
    <div
      id='test'
      className={`flex flex-row gap-2 relative border-[1px] border-[#3F3F50] rounded-md overflow-hidden  hover:scale-[1.01] hover:drop-shadow-xl hover:border-[#8c8c92] ease-in-out duration-300 group w-64  ${
        scForm ? '' : 'border-[#034C4F]'
      }`}
      data-id={data._id}
      onClick={onClick}
    >
      <div>
        <div className='min-h-fit w-full overflow-hidden duration-300 grid grid-cols-1 grid-rows-1 '>
          <picture className='h-full w-full relative z-10 row-start-1 col-start-1'>
            <img
              className='w-64 h-56 aspect-auto object-cover saturate-[0.7] group-hover:saturate-200 group-hover:scale-105 duration-300'
              src={src}
              alt={alt}
            />
          </picture>
          <MenuPopover elementId={statusPin.id} />
        </div>
        <div className='grid items-center h-56 w-64 text-cyan-50 duration-300 bg-[#000000] p-4 z-10000'>
          <div
            className={`mt-6 w-56 left-0 whitespace-nowrap overflow-hidden overflow-ellipsis m-0 ${
              scForm ? 'blur-sm' : ''
            }`}
          >
            <div className='flex flex-row gap-3'>
              <h3 className='text-cyan-50 font-bold text-sm'>Category:</h3>
              <p className='text-gray-400 text-base'>
                {Object.keys(dataPostVerification).length !== 0
                  ? dataPostVerification.category
                  : data.category && capitalize(data.category)}
              </p>
            </div>
            <div className='flex flex-row gap-3'>
              <h3 className='text-cyan-50 font-bold text-sm'>Service Name:</h3>
              <p className='text-gray-400 text-base'>
                {Object.keys(dataPostVerification).length !== 0
                  ? dataPostVerification.serviceName
                  : data.serviceName && capitalize(data.serviceName)}
              </p>
            </div>
            <div className='flex flex-row gap-3 '>
              <h3 className='text-cyan-50 font-bold text-sm'>Description:</h3>
              <p className=' text-gray-400 text-base whitespace-nowrap overflow-hidden truncate m-0'>
                {Object.keys(dataPostVerification).length !== 0
                  ? dataPostVerification.description
                  : data.description}
              </p>
            </div>
            <div className='flex flex-row gap-3'>
              <h3 className='text-cyan-50 font-bold text-sm'>Password:</h3>
              <p className='text-gray-400 text-sm'>
                {Object.keys(dataPostVerification).length !== 0
                  ? dataPostVerification.savePassword
                  : data.password}
              </p>
            </div>
            <div className='flex flex-row gap-3'>
              <h3 className='text-cyan-50 font-bold text-sm'>Created at:</h3>
              <p className='block text-gray-400 text-base whitespace-nowrap overflow-hidden truncate'>
                {Object.keys(dataPostVerification).length !== 0
                  ? dataPostVerification.createAt
                  : data.createAt}
              </p>
            </div>
            <div className='flex flex-row gap-3'>
              <h3 className='text-cyan-50 font-bold text-sm'>Update at:</h3>
              <p className='block text-gray-400 text-base whitespace-nowrap overflow-hidden truncate'>
                {Object.keys(dataPostVerification).length !== 0
                  ? dataPostVerification.updateAt
                  : data.updateAt}
              </p>
            </div>
          </div>
        </div>

        {/* service name in absolute way like liston */}
        <div
          onClick={() => {
            setScForm(true)
            setDataPostVerification({})
          }}
          className={`absolute px-2 py-3 top-[224px] w-64 h-56 text-center border-t-[1px] border-[#3F3F50] duration-300 ${
            scForm
              ? 'bg-[#271f3091] border-[#3F3F50]'
              : 'bg-[#19323c6b] duration-300'
          }`}
        >
          {/* have pin */}

          <div
            className={`flex flex-col items-center p-2 justify-center ${
              isSelected & scForm & statusPin.hasPin ? '' : 'hidden'
            }`}
          >
            <form
              id='formPin'
              className='h-56 w-64 font-bold text-base p-2 mt-5'
              onSubmit={e => getCardInfo(e)}
            >
              <div className='flex flex-col gap-2 justify-center'>
                <label
                  className='block text-cyan-50 text-lg pt-2'
                  htmlFor={data._id}
                >
                  Pin:
                </label>
                <div>
                  <input
                    id={data._id}
                    className='w-1/2 text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-[#034C4F] outline-none ring-2 ring-[#707F8F] focus:ring-[#034C4F] rounded-md bg-[#271f306b]'
                    type='password'
                    name='pin'
                    placeholder='****'
                    maxLength={4}
                    required
                  />
                  <p
                    className={`flex items-center justify-center mx-auto text-sm opacity-0 p-4 w-full h-3 duration-300  ${
                      error ? 'text-red-600 opacity-100 duration-300 ' : ''
                    }`}
                  >
                    {error && error}
                  </p>
                </div>
              </div>
              <button className=' min-w-fit row-start-2 py-2 px-6 bg-purple-900 hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg'>
                Check
              </button>
            </form>
          </div>

          {/* haven't pin */}
          <div
            className={`absolute top-10 translate-y-1/2 left-0 duration-300 w-64 ${
              isSelected & scForm & !statusPin.hasPin ? '' : 'hidden'
            }`}
          >
            <form
              onSubmit={e => getCardInfo(e)}
              className='grid gap-2 grid-cols-1'
            >
              <label className='flex flex-row gap-2 justify-center items-center'>
                <p>Without pin</p>
                <BsFillUnlockFill />
              </label>
              <button className='row-start-2 py-2 px-6 mx-auto bg-purple-900 hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg font-bold'>
                Open
              </button>
            </form>
          </div>
          <p className='absolute top-4 left-1/2 -translate-x-1/2 font-bold text-base underline  lg:left-1/2'>
            {data.serviceName && capitalize(data.serviceName)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardKey
