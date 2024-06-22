import axios from 'axios';
import { useEffect, useState } from 'react';
import HomeRooms from '../../components/HomeRooms';
import './index.scss'

export default function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getAllRooms = async () => {
      try {
        const response = await axios.get('/api/rooms/getallrooms');
        setRooms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllRooms();
  }, []);

  return (
    <section className='home container'>
      <h1>home</h1>
      <h2 className='home__subtitle'>Check out these fantastic stays</h2>
      <div className='home__rooms'>
        {rooms.map(({ __id, imageurls, name, type, maxcount }) => {
          return (
            <HomeRooms
              key={__id}
              images={imageurls}
              name={name}
              type={type}
              maxcount={maxcount}
            />
          );
        })}
      </div>
    </section>
  );
}
