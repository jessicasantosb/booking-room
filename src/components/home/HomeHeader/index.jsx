import { DatePicker } from 'antd';
import './index.scss';
import SearchByName from '../../filters/SearchByName';

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
        <option value='Todos'>Todos</option>
        <option value='Padrão'>Padrão</option>
        <option value='Suíte'>Suíte</option>
        <option value='Individual'>Individual</option>
      </select>

      <SearchByName
        searchKey={searchKey}
        handleChange={(e) => setSearchKey(e.target.value)}
        handleFilterByName={handleFilterByName}
      />
    </div>
  );
}
