/* eslint-disable multiline-ternary */
import React from 'react'
import { useQuestionList } from '../../../hooks/useQuestionList.js'

function Input ({ string, value, placeholder, type = 'text', isTypeSelect }) {
  const { renderOptions } = useQuestionList()
  const questions = renderOptions()

  return (
    <>
      {isTypeSelect ? (
        <div>
          <label htmlFor={value}>{string}</label>
          <select name={value} id={value} required>
            <option value='' disabled>
              Choose a Question?
            </option>
            {questions.map((question, index) => (
              <option key={index} value={question}>
                {question}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <label htmlFor={value}>{string}</label>
          <input
            className='form__input'
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
