import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import './index.scss';

export default function BookingScreen() {
  const [room, setRoom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { roomid } = useParams();

  useEffect(() => {
    const getRoom = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post('/api/rooms/getroombyid', {
          roomid: roomid,
        });
        setRoom(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getRoom();
  }, [roomid]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <section>
      <Link to={'/'} className='link'>
        back to all rooms
      </Link>

      <main className='booking container'>
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

          <button className='button booking__button'>Pay now</button>
        </div>
      </main>
    </section>
  );
}
