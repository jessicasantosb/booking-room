import './index.scss';

export default function TableFilter({
  id,
  label,
  searchResults,
  setSearchResults,
}) {
  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();

    const checkQuery = (value) => {
      return value.toLowerCase().includes(query);
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

    const filteredResults = searchResults.filter((result) => {
      if (id === 'bookings') return bookingsFilter(result);
      if (id === 'rooms') return roomsFilter(result);
      if (id === 'users') return usersFilter(result);
    });

    setSearchResults(filteredResults);
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
