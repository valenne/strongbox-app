import React, { useContext } from 'react'
import { HelperContext } from '../../context/HelperContext.jsx'
import { registerDataInput } from '../../data/dataInputs.js'
import { InputsKey } from '../createKey/InputsKey.jsx'

function User () {
  const { userInfo } = useContext(HelperContext)

  console.log(userInfo)
  return (
    <section id='user'>
      <div className='flex flex-col justify-center align-middle'>
        <div className='w-fit mt-32 mx-auto '>
          <h2 className='text-cyan-50 text-2xl p-5 text-center mt-10 mb-5'>
            Profile
          </h2>
          <form className='p-5 m-auto rounded-xl bg-[#3F3F50]  drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'>
            {registerDataInput &&
              registerDataInput.map((row, key) => (
                <div key={key} className='w-full flex flex-col gap-3 px-5'>
                  <InputsKey row={row} />
                </div>
              ))}
            <div className='m-auto w-full px-5 grid place-items-center py-3 mt-3'>
              <button
                className='w-fit py-3 px-5 bg-[#271F30] hover:bg-black duration-300 text-cyan-50 rounded-lg drop-shadow-lg'
                type='submit'
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default User
