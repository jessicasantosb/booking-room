import { DatePicker } from 'antd';
import './index.scss';

const { RangePicker } = DatePicker;

export default function HomeHeader({ filterByDate }) {
  return (
    <div className='homeheader'>
      <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
    </div>
  );
}
