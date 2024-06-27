import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import { RoomContext } from '../../contexts/RoomContext';
import './index.scss';

export default function BookingScreen() {
  const { getRoom, error, loading, room } = useContext(RoomContext);

  const { roomid } = useParams();

  useEffect(() => {
    getRoom(roomid);
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='container'>
      <Link to={'/'} className='link'>
        back to all rooms
      </Link>

      {error ? (
        <Error error='Something went wrong. Please try again later' />
      ) : (
        <main className='booking'>
          <div>
            <h2 className='title'>{room.name}</h2>
            <div className='booking__images'>
              <img src={room.imageurls && room.imageurls[0]} alt={room.name} />;
            </div>
          </div>

          <div className='booking__content'>
            <h2 className='title booking__title'>Booking Details</h2>
            <p>
              Name: <span></span>
            </p>
            <p>
              From date: <span></span>
            </p>
            <p>
              To date: <span></span>
            </p>
            <p>
              Max count: <span>{room.maxcount}</span>
            </p>

            <h3 className='title booking__subtitle'>Amount</h3>
            <p>
              Total days: <span></span>
            </p>
            <p>
              Rent per days: <span>{room.rentproperty}</span>
            </p>
            <p>
              Total amount: <span></span>
            </p>

            <button className='booking__button'>Pay now</button>
          </div>
        </main>
      )}
    </section>
  );
}
