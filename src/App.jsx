import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { UserStorage } from './contexts/UserContext';

import Layout from './components/Layout';

import BookingScreen from './pages/BookingScreen';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/booking/:roomid',
        element: <BookingScreen />,
      },
    ],
  },
]);

function App() {
  return (
    <UserStorage>
      <RouterProvider router={router} />
    </UserStorage>
  );
}

export default App;
