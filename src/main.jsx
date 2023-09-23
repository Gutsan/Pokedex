import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LouderPovider } from './Context/contextLouder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LouderPovider>
    <App />
    </LouderPovider>
  </React.StrictMode>,
)
