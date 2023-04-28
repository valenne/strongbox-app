import { storageLogic } from '../../data/localStorageData'

// validate if the ping string has only numbers
export function validatPinData ({ pin }) {
  const isNum = /^\d+$/.test(pin)
  if (!pin || !isNum) {
    return { isNum: false, pin: null }
  }
  return { isNum, pin }
}

export function userNotHavePermission (isAuthorized, pathname, navigate) {
  storageLogic.deleteStorage('user')
  console.log(`User authorized: ${isAuthorized}`)
  window.alert(`User authorized: ${isAuthorized} \nPath: ${pathname}`)
  return navigate('/login', { replace: true })
}

export function capitalize (str) {
  const lower = str.toLowerCase()

  return str.charAt(0).toUpperCase() + lower.slice(1)
}

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
