/* eslint-disable multiline-ternary */
import React, { useContext, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { HelperContext } from '../../context/HelperContext.jsx'
import { useCategoriesList } from '../../hooks/useCategories.js'

function InputNormal ({ row }) {
  return (
    <>
      <label className='text-cyan-50 text-lg pt-2 pr-2' htmlFor={row.labelFor}>
        {row.labelName}
      </label>
      <input
        className='text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-cyan-400 outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b] mb-2'
        id={row.inputId}
        name={row.inputName}
        type={row.inputType}
        placeholder={row.placeholder}
        required={row.required}
      />
    </>
  )
}

function InputCheckBox ({ row }) {
  const [isCheck, setIsCheck] = useState(false)
  const { setInputCheck } = useContext(HelperContext)

  const getChecked = e => {
    setIsCheck(e.target.checked)
    setInputCheck(e.target.checked)
  }
  return (
    <>
      <div className='flex flex-row justify-start gap-3 '>
        <span className='block self-center text-center text-cyan-50 font-semibold'>
          🔐 More security ?? :
        </span>
        <input
          className='self-center text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-cyan-400 outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b]'
          type={row.inputType}
          required={row.required}
          onClick={getChecked}
        />
      </div>

      <div className='w-full flex flex-col gap-3  mt-3'>
        {isCheck ? (
          <input
            className='basis-full text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-cyan-400 outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b] mb-2'
            type='password'
            placeholder='****'
            name='pin'
            maxLength={4}
            required
          />
        ) : null}
      </div>
    </>
  )
}

function InputPassword ({ row }) {
  const [isPassVisible, setIsPassVisible] = useState(false)
  return (
    <>
      <label className='text-cyan-50 text-lg pt-2 pr-2' htmlFor={row.labelFor}>
        {row.labelName}
      </label>
      <div className='flex flex-row gap-3 justify-center mb-2'>
        <input
          className='text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-cyan-400 outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b] '
          id={row.inputId}
          name={row.inputName}
          type={isPassVisible ? 'text' : row.inputType}
          placeholder={row.placeholder}
          required={row.required}
        />
        <span className='self-center text-2xl text-cyan-50'>
          {isPassVisible ? (
            <AiFillEye onClick={() => setIsPassVisible(!isPassVisible)} />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setIsPassVisible(!isPassVisible)}
            />
          )}
        </span>
      </div>
    </>
  )
}

function InputSelect ({ row }) {
  const { renderOptions } = useCategoriesList()
  const categories = renderOptions()

  return (
    <>
      <label className='text-cyan-50 text-lg pt-2 pr-2' htmlFor={row.labelFor}>
        {row.labelName}
      </label>
      <div>
        <select
          className=' w-full text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-cyan-400 outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b] '
          name={row.inputName}
          id='categories'
        >
          {categories.map((category, key) => (
            <option
              className='bg-[#271f30] border-0'
              value={category}
              key={key}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export function InputsKey ({ row }) {
  if (row.inputType === 'text') {
    return <InputNormal row={row} />
  }

  if (row.inputType === 'password') {
    return <InputPassword row={row} />
  }

  if (row.inputType === 'checkbox') {
    return <InputCheckBox row={row} />
  }
  if (row.inputType === null) {
    return <InputSelect row={row} />
  }
}
