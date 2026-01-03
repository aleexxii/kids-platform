import { createBrowserRouter } from 'react-router';
import Landing from '../../features/landing/ui/Landing';
import Login from '../../features/auth/routes/LoginRoute';
import SignUp from '../../features/auth/routes/SignupRoute';


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
