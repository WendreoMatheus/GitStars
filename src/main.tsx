import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { makeServer } from './mirage/server'
import AppRouter from './App.router.tsx'

// Apenas se quiser usar o servidor mockado de testes
// if (process.env.NODE_ENV === 'development') {
  // makeServer({ environment: 'development' })
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
