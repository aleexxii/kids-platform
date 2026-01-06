import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { clientRouter } from './app/routes/User.Routes';
import './styles/global.css';
import { AuthProvider } from './app/providers/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={clientRouter} />
    </StrictMode>
  </AuthProvider>
);
