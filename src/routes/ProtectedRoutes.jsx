import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  const isAuthenticated = Boolean(localStorage.getItem('currentUser')) || false;

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
}
