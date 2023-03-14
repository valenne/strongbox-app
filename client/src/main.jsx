import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import { UserDataContextProvider } from './context/UserDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserDataContextProvider>
      <App />
    </UserDataContextProvider>
  </BrowserRouter>
)
