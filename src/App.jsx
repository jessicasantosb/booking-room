import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';

import BookingScreen from './pages/BookingScreen';
import Home from './pages/Home';
import Login from './pages/Login';
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
  return <RouterProvider router={router} />;
}

export default App;
