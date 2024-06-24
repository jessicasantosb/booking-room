import axios from 'axios';
import { useEffect, useState } from 'react';
import HomeRooms from '../../components/HomeRooms';
import Loading from '../../components/interfaces/Loading';
import './index.scss';

export default function Home() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllRooms = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/rooms/getallrooms');
        setRooms(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getAllRooms();
  }, []);

  if (isLoading) return <Loading />;

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
