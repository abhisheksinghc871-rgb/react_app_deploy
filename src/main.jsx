import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// HashRouter: GitHub Pages par refresh karne par 404 nahi aata
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
