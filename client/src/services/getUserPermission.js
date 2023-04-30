import { storageLogic } from '../data/dataExports.js'

export function getUserPermission () {
  // find if exist localstorage saved
  // const localData =
  //   JSON.parse(storageLogic.getStorage('user')) !== null
  //     ? JSON.parse(storageLogic.getStorage('user'))
  //     : null

  const localData = storageLogic.getStorageExpire('user')
  if (!localData) {
    return { isAuthorized: false, localData: null }
  }
  return { isAuthorized: true, localData }
}
