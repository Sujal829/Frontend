import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './HashRouterApp.jsx'
import HistoryRouterApp from './HistoryRouterApp.jsx'
import MemoryRouterApp from './MemoryRouterApp.jsx'
import StaticRouterApp from './components/StaticRouterApp.jsx'
import RouterApp from './RouterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HistoryRouterApp /> */}
    {/* <MemoryRouterApp /> */}
    {/* <StaticRouterApp/>  // we cannot use StaticRouter for client-side rendering*/}
    <RouterApp />
  </StrictMode>,
)
