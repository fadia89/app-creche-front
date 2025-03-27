import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MyRouter from './router/MyRouter.jsx'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyRouter />
  </BrowserRouter>
)

