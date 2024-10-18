import { DatePicker } from 'antd';
import SearchByName from '../../filters/SearchByName';
import SearchByType from '../../filters/SearchByType';
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

      <SearchByType
        handleChange={(e) => handleFilterByType(e.target.value)}
        className='homeheader__search homeheader__search--type'
      />

      <SearchByName
        searchKey={searchKey}
        handleChange={(e) => setSearchKey(e.target.value)}
        handleFilterByName={handleFilterByName}
        className='homeheader__search homeheader__search--name'
      />
    </div>
  );
}
