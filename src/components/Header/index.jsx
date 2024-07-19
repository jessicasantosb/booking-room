import { useContext, useEffect, useState } from 'react';
import { BsSuitcase } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import {
  IoIosLogOut,
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdClose,
} from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [headerDark, setHeaderDark] = useState(null);
  const { userLogout, user } = useContext(UserContext);
  const { pathname } = useLocation();

  const activeLink = {
    color: '#e61e43',
    textDecoration: 'underline',
  };

  const handleLinkStyle = ({ isActive }) => (isActive ? activeLink : null);

  useEffect(() => {
    if (pathname === '/login' || pathname === '/register') {
      setHeaderDark(true);
    } else {
      setHeaderDark(false);
    }
  }, [pathname]);

  return (
    <header className={`header ${headerDark && 'header--dark'}`}>
      <nav className='header__nav container'>
        <Link
          to={'/'}
          className={`header__logo ${headerDark && 'header__logo--dark'}`}
        >
          BookingRoom.com
        </Link>

        <button
          className={`header__menu ${headerDark && 'header__menu--dark'}`}
          onClick={() => setDropdown(!dropdown)}
        >
          {user ? (
            <>
              <FaRegUserCircle />
              {user.name}
              {dropdown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </>
          ) : (
            <>{dropdown ? <IoMdClose /> : <RxHamburgerMenu />}</>
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
                to={'/profile'}
                className='header__link'
                style={handleLinkStyle}
              >
                Profile
                <BsSuitcase />
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
      </nav>
    </header>
  );
}
