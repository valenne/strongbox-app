/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { getUserPermission } from '../services/getUserPermission.js'
import { storageLogic } from '../data/localStorageData.js'

// component
function Dashboard () {
  const [items, setItems] = useState({})
  const navigate = useNavigate()

  const logout = () => {
    storageLogic.deleteStorage('user')
    window.alert('Good Night')
    navigate('/login', { replace: true })
  }

  useEffect(() => {
    const getDataPostValidation = async () => {
      const { isAuthorized, localData } = await getUserPermission(navigate)
      if (!isAuthorized || !localData) return

      if (isAuthorized.data.status) {
        const gettingData = await axios.get(
          `http://localhost:3000/dashboard/user/${localData.auth.id}`
        )
        console.log(gettingData)
      }
    }

    getDataPostValidation().catch(e => console.log(e.message))
  }, [])

  return (
    <div>
      <h3>dashboard</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
