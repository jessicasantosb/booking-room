import { NavLink } from 'react-router-dom';
import './index.scss';

export default function AdminDasboard() {
  const activeLink = {
    color: '#1668e3',
    textDecoration: 'underline',
  };

  const handleLinkStyle = ({ isActive }) => (isActive ? activeLink : null);

  return (
    <div className='adminDashboard'>
      <NavLink to={'.'} end style={handleLinkStyle}>
        reservas
      </NavLink>
      <NavLink to={'rooms'} style={handleLinkStyle}>
        quartos
      </NavLink>
      <NavLink to={'createroom'} style={handleLinkStyle}>
        adicionar um quarto
      </NavLink>
      <NavLink to={'users'} style={handleLinkStyle}>
        usuários
      </NavLink>
    </div>
  );
}
