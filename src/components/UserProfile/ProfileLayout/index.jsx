import { Outlet } from 'react-router-dom';
import ProfileDasboard from '../ProfileDashboard';

export default function ProfileLayout() {
  return (
    <div className='container'>
      <ProfileDasboard />
      <Outlet />
    </div>
  );
}
