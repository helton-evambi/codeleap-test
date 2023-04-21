import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sigup from './pages/signup/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route element={<App />}>
          <Route path="/signup" element={<Sigup />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
