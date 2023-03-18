/* eslint-disable no-undef */
export const storageLogic = {
  getStorage: name => localStorage.getItem(name),
  deleteStorage: name => localStorage.removeItem(name)
}
