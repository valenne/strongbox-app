import { storageLogic } from '../../data/localStorageData'
import { MESSAGE_USER } from '../../data/messageTypes'

// validate if the ping string has only numbers
export function validatPinData ({ pin }) {
  const isNum = /^\d+$/.test(pin)
  if (!pin || !isNum) {
    return { isNum: false, pin: null }
  }
  return { isNum, pin }
}

// validate if the user has authorization, if not delete localData and return to login
export function userNotHavePermission (isAuthorized, pathname, navigate) {
  storageLogic.deleteStorage('user')
  console.log(`${MESSAGE_USER.loggin.userAuthorized}: ${isAuthorized}`)
  window.alert(
    `${MESSAGE_USER.loggin.userAuthorized}: ${isAuthorized} \nPath: ${pathname}`
  )
  return navigate('/login', { replace: true })
}

// transform a string in to capitalize string
export function capitalize (str) {
  const lower = str.toLowerCase()

  return str.charAt(0).toUpperCase() + lower.slice(1)
}

// will return the data in a specific orden according to the information passed
export function returnOrdenData (
  { userKeys },
  asc = false,
  desc = false,
  byDate = false
) {
  if (asc) {
    const ordenAsc = userKeys.sort((a, b) => {
      return a.serviceName.toLowerCase() < b.serviceName.toLowerCase() ? -1 : 1
    })
    return ordenAsc
  }
  if (desc) {
    const ordenDesc = userKeys.sort((a, b) => {
      return a.serviceName.toLowerCase() > b.serviceName.toLowerCase() ? -1 : 1
    })
    return ordenDesc
  }

  if (byDate) {
    const ordenByDate = userKeys.sort((a, b) => {
      return a.createAt - b.createAt
    })
    return ordenByDate
  }
}
