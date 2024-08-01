import { useContext } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import { RoomContext } from '../../contexts/RoomContext';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function OptionsFilter({ id, options }) {
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
  const { getUserBookings, setUserBookings, duplicatedUserBookings } =
    useContext(RoomContext);
  const { user } = useContext(UserContext);

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
        if (value === 'administrador' ? item.isAdmin : !item.isAdmin)
          return item;
      });

      setAllUsers(newArray);
    }

    if (id === 'userbookings') {
      if (value === 'todos') return getUserBookings(user._id);

      const newArray = duplicatedUserBookings.filter((item) => {
        if (value === item.status) return item;
      });

      setUserBookings(newArray);
    }
  };

  return (
    <div className='optionsFilter'>
      <select onChange={handleFilter} className='optionsFilter__options'>
        <option value='todos'>Todos</option>
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
