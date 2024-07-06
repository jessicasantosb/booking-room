import { DatePicker } from 'antd';
import './index.scss';

const { RangePicker } = DatePicker;

export default function HomeHeader({
  handleFilterByDate,
  handleFilterByName,
  searchKey,
  setSearchKey,
}) {
  return (
    <div className='homeheader'>
      <RangePicker
        format='MM-DD-YYYY'
        onChange={handleFilterByDate}
        className='homeheader__searchDate'
      />
      <input
        className='homeheader__searchName'
        type='text'
        placeholder='pesquise seu quarto'
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyUp={handleFilterByName}
      />
    </div>
  );
}
