import './index.scss';

export default function TableSelect({ array, getAll, setAll }) {
  const handleStatusFilter = (e) => {
    const value = e.target.value;

    if (value === 'todos') return getAll();

    const newArray = array.filter((book) => {
      if (value === book.status) {
        return book;
      }
    });

    setAll(newArray);
  };

  return (
    <div className='tableSelect'>
      <p>Pesquise pelo status</p>
      <select onChange={handleStatusFilter} className='tableSelect__options'>
        <option value='todos'>todos</option>
        <option value='reservado'>reservados</option>
        <option value='cancelado'>cancelados</option>
      </select>
    </div>
  );
}
