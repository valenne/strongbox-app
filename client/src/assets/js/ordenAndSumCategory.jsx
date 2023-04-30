import { capitalize } from './helperFunctions.js'

// take category and orden + sum if the values are duplicates
export function transformAndSumCategory (array) {
  const count = {}

  array.forEach(element => {
    if (count[element.category]) {
      count[element.category] += 1
    } else {
      count[element.category] = 1
    }
  })

  const ordenCount = Object.entries(count).sort((a, b) => {
    return a > b
  })

  return ordenCount.map(([key, value], index) => {
    return (
      <li className='text-gray-400 text-center' key={array[index]._id}>
        {`${capitalize(key)} `}
        <span className='inline-block font-bold text-white'>({value})</span>
      </li>
    )
  })
}
