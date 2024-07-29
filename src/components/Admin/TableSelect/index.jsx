import { useContext } from 'react';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function TableSelect({ id, label, options }) {
  const {
    setAllBookings,
    getAllBookings,
    duplicateBookings,
    setAllRooms,
    getAllRooms,
    duplicateRooms,
    setAllUsers,
    getAllUsers,
    duplicateUsers,
  } = useContext(AdminContext);

  const handleFilter = (e) => {
    const value = e.target.value;

    if (id === 'bookings') {
      if (value === 'todos') return getAllBookings();

      const newArray = duplicateBookings.filter((item) => {
        if (value === item.status) return item;
      });

      setAllBookings(newArray);
    }

    if (id === 'rooms') {
      if (value === 'todos') return getAllRooms();

      const newArray = duplicateRooms.filter((item) => {
        if (value === item.type) return item;
      });

      setAllRooms(newArray);
    }

    if (id === 'users') {
      if (value === 'todos') return getAllUsers();

      const newArray = duplicateUsers.filter((item) => {
        if (value === 'administrador' ? item.isAdmin : !item.isAdmin) return item;
      });

      setAllUsers(newArray);
    }
  };

  return (
    <div className='tableSelect'>
      <p>{label}</p>
      <select onChange={handleFilter} className='tableSelect__options'>
        <option value='todos'>todos</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
