import { DatePicker } from 'antd';
import './index.scss';

const { RangePicker } = DatePicker;

export default function HomeHeader({
  handleFilterByDate,
  handleFilterByName,
  handleFilterByType,
  searchKey,
  setSearchKey,
}) {
  return (
    <div className='homeheader'>
      <RangePicker
        format='MM-DD-YYYY'
        onChange={handleFilterByDate}
        className='homeheader__search homeheader__search--date'
      />
      <select
        onChange={(e) => handleFilterByType(e.target.value)}
        className='homeheader__search homeheader__search--type'
      >
        <option value="Todos">Todos</option>
        <option value='Padrão'>Padrão</option>
        <option value='Suíte'>Suíte</option>
        <option value='Individual'>Individual</option>
      </select>
      <input
        className='homeheader__search homeheader__search--name'
        type='text'
        placeholder='pesquise seu quarto'
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyUp={handleFilterByName}
      />
    </div>
  );
}
