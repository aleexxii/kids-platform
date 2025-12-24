import { createBrowserRouter } from 'react-router';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import {
  About,
  ForParents,
  LearningPaths,
  Contact,
  HowItWorks,
} from '../pages/Landing/sections';

export const clientRouter = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      { path: 'about', element: <About /> },
      { path: 'parents', element: <ForParents /> },
      { path: 'programs', element: <LearningPaths /> },
      { path: 'contact', element: <Contact /> },
      { path: 'how-it-works', element: <HowItWorks /> },
    ],
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
