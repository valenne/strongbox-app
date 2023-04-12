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
