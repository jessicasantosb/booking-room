import { Link, NavLink } from 'react-router-dom';
import './index.scss';

export default function Header() {
  const activeLink = {
    color: '#e61e43',
    textDecoration: 'underline',
  };

  const handleLinkStyle = ({ isActive }) => (isActive ? activeLink : null);

  return (
    <header className='header container'>
      <Link to={'/'} className='header__logo'>
        BookingRoom.com
      </Link>

      <nav className='header__nav'>
        <NavLink to={'/login'} className='header__link' style={handleLinkStyle}>
          Login
        </NavLink>
        <NavLink to={'/register'} className='header__link' style={handleLinkStyle}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}
