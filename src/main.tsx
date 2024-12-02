import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { makeServer } from './mirage/server.js'
import AppRouter from './App.router.tsx'

if (process.env.NODE_ENV === "development") {
  makeServer({environment: "development"})
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
