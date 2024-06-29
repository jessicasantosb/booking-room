import dayjs from 'dayjs';
import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import { RoomContext } from '../../contexts/RoomContext';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function BookingScreen() {
  const { getRoom, bookRoom, error, loading, room } = useContext(RoomContext);
  const { user } = useContext(UserContext);
  const { roomid, fromDate, toDate } = useParams();

  const from = dayjs(fromDate);
  const to = dayjs(toDate);
  const totalDays = to.diff(from, 'day');

  const totalAmount = totalDays * room.rentproperty;

  const handleBooking = () => {
    bookRoom(room, roomid, user._id, fromDate, toDate, totalDays, totalAmount);
  };

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
              Name: <span>{user?.name}</span>
            </p>
            <p>
              From date: <span>{fromDate}</span>
            </p>
            <p>
              To date: <span>{toDate}</span>
            </p>
            <p>
              Max count: <span>{room.maxcount}</span>
            </p>

            <h3 className='title booking__subtitle'>Amount</h3>
            <p>
              Total days: <span>{totalDays}</span>
            </p>
            <p>
              Rent per days: <span>{room.rentproperty}</span>
            </p>
            <p>
              Total amount: <span>{totalAmount}</span>
            </p>

            <button className='booking__button' onClick={handleBooking}>
              Pay now
            </button>
          </div>
        </main>
      )}
    </section>
  );
}
