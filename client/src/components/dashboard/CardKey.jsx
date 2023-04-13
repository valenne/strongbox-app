import React from 'react'
import { capitalize } from '../../assets/js/helperFunctions'

function CardKey ({ src, alt, data }) {
  const hasLockByPin = e => {
    const isLock =
      e.currentTarget.getAttribute('data-lock') === 'true' ? true : false

    console.log(isLock)
  }
  return (
    <>
      <div className='min-h-fit w-full overflow-hidden duration-300'>
        <picture className='h-full w-full'>
          <img
            className='w-[350px] h-[250px] aspect-auto object-cover saturate-[0.7] group-hover:saturate-200 group-hover:scale-105 duration-300'
            src={src}
            alt={alt}
          />
        </picture>
      </div>
      <div
        className={`h-[150px] text-cyan-50 duration-300 bg-[#171123] p-4 blur-sm`}
        onClick={hasLockByPin}
        data-lock={data.hasPin}
      >
        <div className=''>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Category:</h3>
            <p className='text-gray-400'>
              {data.category && capitalize(data.category)}
            </p>
          </div>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Service Name:</h3>
            <p className='text-gray-400'>
              {data.serviceName && capitalize(data.serviceName)}
            </p>
          </div>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Description:</h3>
            <p className='text-gray-400'>{data.description}</p>
          </div>
          <div className='flex flex-row gap-3'>
            <h3 className='text-cyan-50 font-bold'>Created at:</h3>
            <p className='text-gray-400'>{data.createAt}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardKey

// seguir estilando le targeta, luego realizar logica de ordenamiento alfabetico, y eleccion por categoria, contar cuantas card por categoria existen y ponerlas entre parentesis, usar para useMemo o useCallback para efectuar el orden alfabetico
