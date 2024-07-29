import TableInput from '../TableInput';
import TableOrdering from '../TableOrdering';
import TableSelect from '../TableSelect';
import './index.scss';

export default function AdminFilter({id, label, options}) {
  return (
    <div className='adminFilter'>
      <TableInput id={id} label={label} />

      <div className='adminFilter__sort'>
        <p>Ordenar</p>
        <TableSelect id={id} options={options} />

        <TableOrdering id={id} />
      </div>
    </div>
  );
}
