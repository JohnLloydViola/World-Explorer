import './index.css'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

if (localStorage.getItem('mode') === 'true') {
  document.body.classList.add('darkMode');
}

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);