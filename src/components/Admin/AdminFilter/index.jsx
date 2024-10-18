import TableInput from '../TableInput';
import TableOrdering from '../TableOrdering';
import OptionsFilter from '../../filters/OptionsFilter';
import './index.scss';

export default function AdminFilter({id, label, options}) {
  return (
    <div className='adminFilter'>
      <TableInput id={id} label={label} />

      <div className='adminFilter__sort'>
        <p>Ordenar</p>
        <OptionsFilter id={id} options={options} />

        <TableOrdering id={id} />
      </div>
    </div>
  );
}
