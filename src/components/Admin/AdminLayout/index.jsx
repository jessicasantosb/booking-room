import { Outlet } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard';

export default function AdminLayout() {
  return (
      <div className='container'>
        <AdminDashboard />
        <Outlet />
      </div>
  );
}
