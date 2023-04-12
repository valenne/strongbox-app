/* eslint-disable multiline-ternary */
import React from 'react'
import { createKeyInput } from './../../data/dataInputs.js'

// icons
import { InputsKey } from './InputsKey.jsx'

function RegisterKeyInput () {
  return (
    <div className='w-full flex flex-col justify-content'>
      {createKeyInput &&
        createKeyInput.map((row, key) => (
          <div key={key} className='w-full flex flex-col gap-3 px-5 mb-2'>
            <InputsKey row={row} />
          </div>
        ))}
    </div>
  )
}

export default RegisterKeyInput
