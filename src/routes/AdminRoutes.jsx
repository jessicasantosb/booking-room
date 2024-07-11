import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoutes() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const isAdmin = user?.isAdmin;

  return isAdmin ? <Outlet /> : <Navigate to='/' replace />;
}
