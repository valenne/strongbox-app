/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

async function getDashboardData (items) {
  const { token } = JSON.parse(localStorage.getItem('user'))

  // to send a token from frontend to backend, we need to use the verb post
  // to the authenticate route, or middleware, then we can figure the next logic for our route dashboard
  const res = await axios.post('http://localhost:3000/dashboard', items, {
    headers: {
      Authentication: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  return { res }
}

// component
function Dashboard () {
  const [items, setItems] = useState({})
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    window.alert('Good Night')
    navigate('/login', { replace: true })
  }
  // seguir con dashboard grid y posterior

  getDashboardData(items)

  useEffect(() => {
    const itemsLocale = JSON.parse(localStorage.getItem('user'))
    if (itemsLocale) {
      console.log(itemsLocale)
      setItems(itemsLocale)
    }
  }, [])

  return (
    <div>
      <h3>dashboard</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
