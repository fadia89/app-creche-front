
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './router/MyRouter.jsx';
import './index.css';
import { AuthController } from './context/authContext.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthController>
    <MyRouter />
  </AuthController>
    

  </BrowserRouter>
)

