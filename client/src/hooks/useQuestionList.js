import { useState, useEffect } from 'react'
import { questions } from '../data/recoveryQuestion.js'

// hook questionLists
export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState({})

  useEffect(() => {
    setQuestionList(questions)
  }, [])

  const renderOptions = () => {
    const values = []
    values.push(...Object.values(questionList))
    return values
  }

  return { questionList, renderOptions }
}
