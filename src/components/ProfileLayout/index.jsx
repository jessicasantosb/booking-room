import { Outlet } from 'react-router-dom';
import ProfileDasboard from '../ProfileDashboard';
import './index.scss';

export default function ProfileLayout() {
  return (
    <div className='container'>
      <ProfileDasboard />
      <Outlet />
    </div>
  );
}
