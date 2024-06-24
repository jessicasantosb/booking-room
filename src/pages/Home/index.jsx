import axios from 'axios';
import { useEffect, useState } from 'react';
import HomeRooms from '../../components/HomeRooms';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import './index.scss';

export default function Home() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllRooms = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/rooms/getallrooms');
        setRooms(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getAllRooms();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <section className='home container'>
      <h1>home</h1>
      <h2 className='home__subtitle'>Check out these fantastic stays</h2>
      <div className='home__rooms'>
        {rooms.map((room) => {
          return <HomeRooms key={room._id} room={room} />;
        })}
      </div>
    </section>
  );
}
