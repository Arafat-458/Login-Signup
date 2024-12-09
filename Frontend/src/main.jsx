<<<<<<< HEAD

import  { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/Storecontext.jsx'
=======
import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'
>>>>>>> c450967 (Initial Commit)
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
  <App />
  </StoreContextProvider>
  </BrowserRouter>
<<<<<<< HEAD
    
 
=======
  
  
>>>>>>> c450967 (Initial Commit)
)
