import { useEffect, useState } from 'react'
import { categories } from '../data/recoveryQuestion.js'

// hook questionLists
export const useCategoriesList = () => {
  const [categoriesList, setCategoriesList] = useState({})

  useEffect(() => {
    setCategoriesList(categories)
  }, [])

  const renderOptions = () => {
    const values = []
    values.push(...Object.values(categoriesList))
    return values
  }

  return { categoriesList, renderOptions }
}
