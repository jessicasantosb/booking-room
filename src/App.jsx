import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { RoomProvider } from './contexts/RoomContext';
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
        path: '/booking/:roomid/:fromDate/:toDate',
        element: <BookingScreen />,
      },
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
