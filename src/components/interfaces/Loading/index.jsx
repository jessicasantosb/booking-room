import GridLoader from 'react-spinners/GridLoader';
import './index.scss';

export default function Loading() {
  return (
    <section className='loading'>
      <h3 className='loading__title'>BookingRoom.com</h3>
      <GridLoader
        color='#191e3b'
        size={10}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </section>
  );
}
