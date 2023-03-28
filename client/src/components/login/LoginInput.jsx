import React from 'react'
import { LoginDataInput } from '../../data/dataExports.js'

function LoginInput ({ error }) {
  return (
    <div className='w-full flex flex-col justify-content'>
      {LoginDataInput &&
        LoginDataInput.map((row, key) => (
          <div key={key} className='w-full flex flex-col gap-3 px-5'>
            <label
              className='text-cyan-50 text-lg pt-2 pr-2 pb-2'
              htmlFor={row.labelFor}
            >
              {row.labelName}
            </label>

            <input
              className='text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-[#271F30] outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b]'
              id={row.inputId}
              name={row.inputName}
              type={row.inputType}
              placeholder={row.placeholder}
              required={row.required}
            />
            <span
              className={`${
                error?.match(row.regex)
                  ? 'block h-5 opacity-1 text-red-500'
                  : 'block h-5 opacity-0'
              }`}
            >
              {error?.match(row.regex) && error}
            </span>
          </div>
        ))}
    </div>
  )
}

export default LoginInput
