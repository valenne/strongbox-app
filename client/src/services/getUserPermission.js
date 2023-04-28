import { storageLogic } from '../data/dataExports.js'

export function getUserPermission () {
  // find if exist localstorage saved
  const localData =
    JSON.parse(storageLogic.getStorage('user')) !== null
      ? JSON.parse(storageLogic.getStorage('user'))
      : null
  if (!localData) {
    return { isAuthorized: false }
  }
  return { isAuthorized: true, localData }
}
