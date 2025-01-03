import { useContext } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function TableFilter({ id, label }) {
  const {
    setAllBookings,
    duplicateBookings,
    setAllRooms,
    duplicateRooms,
    setAllUsers,
    duplicateUsers,
  } = useContext(AdminContext);

  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const location = useLocation()

  const handleFilter = ({ target }) => {
    const query = target.value;

    setSearchParams({ q: query });

    if (query === '') {
      navigate(location.pathname);    
    }

    const checkQuery = (value) => {
      return value.toLowerCase().includes(query.toLowerCase());
    };

    const bookingsFilter = (result) => {
      if (
        checkQuery(result._id) ||
        checkQuery(result.userid) ||
        checkQuery(result.room)
      )
        return result;
    };

    const roomsFilter = (result) => {
      if (checkQuery(result._id) || checkQuery(result.name)) return result;
    };

    const usersFilter = (result) => {
      if (
        checkQuery(result._id) ||
        checkQuery(result.name) ||
        checkQuery(result.email)
      )
        return result;
    };

    if (id === 'bookings') {
      const filteredArray = duplicateBookings.filter((result) => {
        return bookingsFilter(result);
      });

      setAllBookings(filteredArray);
    }

    if (id === 'rooms') {
      const filteredArray = duplicateRooms.filter((result) => {
        return roomsFilter(result);
      });

      setAllRooms(filteredArray);
    }

    if (id === 'users') {
      const filteredArray = duplicateUsers.filter((result) => {
        return usersFilter(result);
      });

      setAllUsers(filteredArray);
    }
  };

  return (
    <label className='tablefilter'>
      {label}
      <input
        type='text'
        onChange={handleFilter}
        className='tablefilter__input'
      />
    </label>
  );
}
