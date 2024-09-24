import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import UserRoutes from './components/UserRoutes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  </StrictMode>,
)
