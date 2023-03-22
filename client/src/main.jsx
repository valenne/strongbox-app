import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import { HelperContextProvider } from './context/HelperContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelperContextProvider>
      <App />
    </HelperContextProvider>
  </BrowserRouter>
)
