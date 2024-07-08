import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { RoomProvider } from './contexts/RoomContext';
import { UserStorage } from './contexts/UserContext';

import Layout from './components/Layout';
import ProfileLayout from './components/UserProfile/ProfileLayout';

import Booking from './pages/Booking';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Bookings from './pages/UserProfile/Bookings';
import Profile from './pages/UserProfile/Profile';
import AdminLayout from './components/AdminProfile/AdminLayout';

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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'booking/:roomid/:fromDate/:toDate',
        element: <Booking />,
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: 'bookings',
            element: <Bookings />,
          },
        ],
      },
      {
        path: 'admin',
        element: <AdminLayout/>
      }
    ],
  },
]);

function App() {
  return (
    <UserStorage>
      <RoomProvider>
        <RouterProvider router={router} />
      </RoomProvider>
    </UserStorage>
  );
}

export default App;
