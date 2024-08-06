import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { AdminProvider } from './contexts/AdminContext';
import { RoomProvider } from './contexts/RoomContext';
import { UserProvider } from './contexts/UserContext';
import AdminRoutes from './routes/AdminRoutes';
import ProtectedRoutes from './routes/ProtectedRoutes';

import AdminLayout from './components/Admin/AdminLayout';
import Layout from './components/Layout';
import ProfileLayout from './components/UserProfile/ProfileLayout';

import Booking from './pages/Booking';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

import Bookings from './pages/UserProfile/Bookings';
import Profile from './pages/UserProfile/Profile';

import AllBookings from './pages/Admin/AllBookings';
import AllRooms from './pages/Admin/AllRooms';
import AllUsers from './pages/Admin/AllUsers';
import CreateRoom from './pages/Admin/CreateRoom';

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
        element: <ProtectedRoutes />,
        children: [
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
            element: <AdminRoutes />,
            children: [
              {
                path: 'admin',
                element: <AdminLayout />,
                children: [
                  {
                    index: true,
                    element: <AllBookings />,
                  },
                  {
                    path: 'rooms',
                    element: <AllRooms />,
                  },
                  {
                    path: 'createroom',
                    element: <CreateRoom />,
                  },
                  {
                    path: 'users',
                    element: <AllUsers />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AdminProvider>
      <UserProvider>
        <RoomProvider>
          <RouterProvider router={router} />
        </RoomProvider>
      </UserProvider>
    </AdminProvider>
  );
}

export default App;
