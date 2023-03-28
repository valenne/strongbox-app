/* eslint-disable multiline-ternary */
import React from 'react'
import { useQuestionList } from '../../hooks/useQuestionList.js'

function RegisterInput () {
  const { renderOptions, registerDataInput } = useQuestionList()
  const questions = renderOptions()

  console.log(questions)

  return (
    <div className='w-full flex flex-col justify-content'>
      {registerDataInput &&
        registerDataInput.map((row, key) => (
          <div key={key} className='w-full flex flex-col gap-3 px-5'>
            <label
              className='text-cyan-50 text-lg pt-2 pr-2'
              htmlFor={row.labelFor}
            >
              {row.labelName}
            </label>
            {row.inputType !== null ? (
              <input
                className='text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-cyan-400 outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b] mb-4'
                id={row.inputId}
                name={row.inputName}
                type={row.inputType}
                placeholder={row.placeholder}
                required={row.required}
              />
            ) : (
              <div className='w-full flex flex-col gap-3'>
                <select
                  className='block overflow-hidden text-ellipsis text-cyan-50 font-semibold placeholder:text-[#b9dfee5b] p-2 caret-[#271F30] outline-none ring-2 ring-[#707F8F] focus:ring-cyan-400 rounded-md bg-[#271f306b]'
                  name={row.inputName}
                  id={row.inputId}
                >
                  {questions.map((question, key) => (
                    <option value={question} key={key}>
                      {question}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default RegisterInput
