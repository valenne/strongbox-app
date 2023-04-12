import React from 'react'

function CardKey ({ src, alt, data }) {
  return (
    <>
      <div className='min-h-fit w-full'>
        <picture className='h-full w-full'>
          <img
            className='w-[350px] h-[250px] object-cover '
            src={src}
            alt={alt}
          />
        </picture>
      </div>
      <div className='h-[150px]'>
        <div>
          <span>Service Name</span>
          <p>{data.serviceName}</p>
        </div>
      </div>
    </>
  )
}

export default CardKey

// seguir estilando le targeta, luego realizar logica de ordenamiento alfabetico, y eleccion por categoria, contar cuantas card por categoria existen y ponerlas entre parentesis, usar para useMemo o useCallback para efectuar el orden alfabetico
