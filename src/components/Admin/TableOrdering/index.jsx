import { useContext } from 'react';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function TableOrdering({ id }) {
  const {
    setAllBookings,
    getAllBookings,
    duplicateBookings,
    setAllRooms,
    getAllRooms,
    duplicateRooms,
  } = useContext(AdminContext);

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === 'default') {
      if (id === 'bookings') return getAllBookings();
      if (id === 'rooms') return getAllRooms();
    }

    if (value === 'crescente') {
      if (id === 'bookings') {
        const asc = duplicateBookings
          .map((item) => item)
          .sort((a, b) => {
            return new Date(a.fromdate) - new Date(b.fromdate);
          });

        setAllBookings(asc);
      }

      if (id === 'rooms') {
        const asc = duplicateRooms
          .map((item) => item)
          .sort((a, b) => {
            return a.rentproperty - b.rentproperty;
          });

        setAllRooms(asc);
      }
    }

    if (value === 'decrescente') {
      if (id === 'bookings') {
        const asc = duplicateBookings
          .map((item) => item)
          .sort((a, b) => {
            return new Date(b.fromdate) - new Date(a.fromdate);
          });

        setAllBookings(asc);
      }

      if (id === 'rooms') {
        const asc = duplicateRooms
          .map((item) => item)
          .sort((a, b) => {
            return b.rentproperty - a.rentproperty;
          });

        setAllRooms(asc);
      }
    }
  };

  return (
    <div
      className='tableOrdering'
      style={{ display: id === 'users' && 'none' }}
    >
      <select onChange={handleFilter} className='tableOrdering__options'>
        <option disabled>Ordenar</option>
        <option value='default'>
          {id === 'bookings' && 'Por Data da Reserva'}
          {id === 'rooms' && 'Pela Data de Criação'}
        </option>
        <option value='crescente'>
          {id === 'bookings' && 'Check-in Crescente'}
          {id === 'rooms' && 'Diária Crescente'}
        </option>
        <option value='decrescente'>
          {id === 'bookings' && 'Check-in Decrescente'}
          {id === 'rooms' && 'Diária Decrescente'}
        </option>
      </select>
    </div>
  );
}
