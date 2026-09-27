import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AppToDo from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppToDo />
  </StrictMode>,
)
