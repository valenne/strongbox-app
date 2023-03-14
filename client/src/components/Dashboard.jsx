import React, { useContext } from 'react'

// context
import { UserDataContext } from '../context/UserDataContext.jsx'

function Dashboard () {
  const { loginInfo } = useContext(UserDataContext)

  console.log('dashboard', loginInfo.current)
  return (
    <div>
      <h3>Dashboard</h3>
      <div></div>
    </div>
  )
}

export default Dashboard
