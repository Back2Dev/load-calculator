import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
