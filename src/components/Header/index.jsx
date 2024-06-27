import { useContext, useState } from 'react';
import { IoIosLogOut, IoMdArrowDropdown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const { userLogout, user } = useContext(UserContext);

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

      <button className='header__menu' onClick={() => setDropdown(!dropdown)}>
        {user ? (
          <>
            {user.name}
            <IoMdArrowDropdown />
          </>
        ) : (
          <RxHamburgerMenu />
        )}
      </button>

      <div
        className={`header__dropdown ${
          !dropdown && 'header__dropdown--hidden'
        }`}
      >
        {user ? (
          <>
            <NavLink
              to={'/bookings'}
              className='header__link'
              style={handleLinkStyle}
            >
              Bookings
            </NavLink>
            <button onClick={() => userLogout()} className='header__logout'>
              Logout <IoIosLogOut />
            </button>
          </>
        ) : (
          <>
            <NavLink
              to={'/login'}
              className='header__link'
              style={handleLinkStyle}
            >
              Login
            </NavLink>
            <NavLink
              to={'/register'}
              className='header__link'
              style={handleLinkStyle}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}
