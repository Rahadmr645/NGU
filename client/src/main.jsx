import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import eruda from 'eruda'; 

import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Context/StoreContext.jsx';
eruda.init();
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>

)
