import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { DrawerProvider } from './context/drawer'


createRoot(document.getElementById('root')!).render(
  <DrawerProvider>
    <App />
  </DrawerProvider>,
)
