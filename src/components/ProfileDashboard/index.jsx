import { NavLink } from 'react-router-dom';
import './index.scss';

export default function ProfileDasboard() {
  const activeLink = {
    color: '#e61e43',
    textDecoration: 'underline',
  };

  const handleLinkStyle = ({ isActive }) => (isActive ? activeLink : null);

  return (
    <div className='dashboard'>
      <NavLink to={'.'} end style={handleLinkStyle}>
        my profile
      </NavLink>
      <NavLink to={'bookings'} style={handleLinkStyle}>
        bookings
      </NavLink>
    </div>
  );
}
