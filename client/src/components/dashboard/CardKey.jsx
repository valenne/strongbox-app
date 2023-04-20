import React, { useState } from 'react'
import { BsFillUnlockFill } from 'react-icons/bs'
import { capitalize } from '../../assets/js/helperFunctions'

function CardKey ({ src, alt, data, onClick, isSelected, pin, axiosCardData }) {
  const [dataPostVerification, setDataPostVerification] = useState({})
  const [error, setError] = useState('')
  const [scForm, setScForm] = useState(true)
  const getCardInfo = e => {
    e.preventDefault()

    const cardForm = Object.fromEntries(new FormData(e.target))
    const { id } = pin

    if (Object.keys(cardForm).length === 0) {
      return axiosCardData(id, null, 'cards')
        .then(result => {
          setDataPostVerification(result)
          setScForm(false)
        })
        .catch(err => console.log(err))
        .finally(() => {
          console.log('end of process')
        })
    }

    const { data } = cardForm

    return axiosCardData(id, data, 'cards')
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
      .finally(() => console.log('end of process'))
  }

  return (
    <div
      id='test'
      className='relative border-[1px] border-[#3F3F50] w-max rounded-md overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] hover:scale-[1.01] ease-in-out duration-300  group'
      data-id={data._id}
      onClick={onClick}
    >
      <div className='min-h-fit w-full overflow-hidden duration-300'>
        <picture className='h-full w-full relative'>
          <img
            className='w-[350px] h-[250px] aspect-auto object-cover saturate-[0.7] group-hover:saturate-200 group-hover:scale-105 duration-300'
            src={src}
            alt={alt}
          />
        </picture>
      </div>
      <div
        className={`grid items-center h-[200px] text-cyan-50 duration-300 bg-[#000000] p-4 
          
        `}
      >
        <div className={`mt-6 ${scForm ? 'blur-sm' : ''}`}>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Category:</h3>
            <p className='text-gray-400'>
              {Object.keys(dataPostVerification).length !== 0
                ? dataPostVerification.category
                : data.category && capitalize(data.category)}
            </p>
          </div>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Service Name:</h3>
            <p className='text-gray-400'>
              {Object.keys(dataPostVerification).length !== 0
                ? dataPostVerification.serviceName
                : data.serviceName && capitalize(data.serviceName)}
            </p>
          </div>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Description:</h3>
            <p className='text-gray-400'>
              {Object.keys(dataPostVerification).length !== 0
                ? dataPostVerification.description
                : data.description}
            </p>
          </div>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Password:</h3>
            <p className='text-gray-400'>
              {Object.keys(dataPostVerification).length !== 0
                ? dataPostVerification.savePassword
                : data.password}
            </p>
          </div>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Created at:</h3>
            <p className='text-gray-400'>
              {Object.keys(dataPostVerification).length !== 0
                ? dataPostVerification.createAt
                : data.createAt}
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
        className=' flex flex-col absolute px-2 py-3 top-[125px] w-[350px] h-[250px] translate-x-0 translate-y-1/2 text-center bg-[#271f3091] border-[1px] border-[#3F3F50]'
      >
        {/* have pin */}
        <form
          id='formPin'
          className='absolute w-full top-0 left-0 translate-x-2 translate-y-10 font-bold text-base p-4'
          onSubmit={e => getCardInfo(e)}
        >
          <div
            className={`grid grid-cols-2 gap-2 items-center p-2 ${
              isSelected & scForm & pin.hasPin ? '' : 'hidden'
            }`}
          >
            <div className='flex flex-row gap-2'>
              <label
                className='block text-cyan-50 text-lg pt-2 pr-2 pb-2'
                htmlFor={data._id}
              >
                Pin
              </label>
              <div>
                <input
                  id={data._id}
                  className='text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-cyan-400 outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b]'
                  type='password'
                  name='data'
                  placeholder='****'
                  maxLength={4}
                  required
                />
                <p
                  className={`flex items-center justify-center mx-auto text-sm opacity-0 mt-2 w-full h-3 duration-300  ${
                    error ? 'text-red-600 opacity-100 duration-300 ' : ''
                  }`}
                >
                  {error && error}
                </p>
              </div>
            </div>
            <button className='absolute translate-x-24 mt-4 translate-y-14 min-w-fit row-start-2 py-2 px-6 bg-purple-900 hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg'>
              Check
            </button>
          </div>
        </form>

        {/* haven't pin */}
        <div
          className={`absolute top-10 left-16 translate-x-1/2 translate-y-1/2 duration-300 ${
            isSelected & scForm & !pin.hasPin ? '' : 'hidden'
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
            <button className=' inline-block min-w-fit row-start-2 py-2 px-6 bg-purple-900 hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg font-bold'>
              Open
            </button>
          </form>
        </div>
        <p className='absolute top-4 left-1/2 -translate-x-1/2 font-bold text-base underline'>
          {data.serviceName && capitalize(data.serviceName)}
        </p>
      </div>
    </div>
  )
}

export default CardKey

// seguir estilando le targeta, luego realizar logica de ordenamiento alfabetico, y eleccion por categoria, contar cuantas card por categoria existen y ponerlas entre parentesis, usar para useMemo o useCallback para efectuar el orden alfabetico
