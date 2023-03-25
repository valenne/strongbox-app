/* eslint-disable multiline-ternary */
import React from 'react'
import { useQuestionList } from '../../../hooks/useQuestionList.js'

function Input ({ string, value, placeholder, type = 'text', isTypeSelect }) {
  const { renderOptions } = useQuestionList()
  const questions = renderOptions()

  return (
    <>
      {isTypeSelect ? (
        <div className=' w-full flex flex-col gap-3 m-auto px-5'>
          <label
            className='text-cyan-50 text-lg pt-2 pr-2 pb-2'
            htmlFor={value}
          >
            {string}
          </label>
          <select
            className='block overflow-hidden text-ellipsis text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-[#271F30] outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b]'
            name={value}
            id={value}
            required
          >
            {questions.map((question, index) => (
              <option
                className='block text-ellipsis'
                key={index}
                value={question}
              >
                {question}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className='flex flex-col gap-3 px-5'>
          <label
            className='text-cyan-50 text-lg pt-2 pr-2 pb-2'
            htmlFor={value}
          >
            {string}
          </label>
          <input
            className='text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-[#271F30] outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b]'
            type={type}
            name={value}
            id={value}
            placeholder={placeholder}
            required
          />
        </div>
      )}
    </>
  )
}

export default Input
// working on styles all the element with tailwind, then i can pass to dashboard logic
