import { createBrowserRouter } from 'react-router';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';


export const clientRouter = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
