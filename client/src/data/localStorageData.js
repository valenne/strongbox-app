/* eslint-disable no-undef */
export const storageLogic = {
  setStorage: (name, value, ttl) => {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    // the expiry time is in ms, what is mean 1min = 60000ms
    const item = {
      value,
      expiry: now.getTime() + ttl
    }
    localStorage.setItem(name, JSON.stringify(item))
  },
  getStorage: name => localStorage.getItem(name),
  getStorageExpire: name => {
    const itemStr = localStorage.getItem(name)
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)

    const now = new Date()

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(name)
      return null
    }
    return item.value
  },
  deleteStorage: name => localStorage.removeItem(name)
}
