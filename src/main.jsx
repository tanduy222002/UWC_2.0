import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import RouteProvider from './context/RouteContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <RouteProvider>
      <App />
    </RouteProvider>
    </BrowserRouter>
  </React.StrictMode>
)
