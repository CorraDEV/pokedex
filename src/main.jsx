import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/google_font.css"
import "./css/normalize.css"
import "./css/milligram.css"
import "./css/style.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)