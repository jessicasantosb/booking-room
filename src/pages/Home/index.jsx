import { useContext, useEffect } from 'react';
import HomeRooms from '../../components/HomeRooms';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import { RoomContext } from '../../contexts/RoomContext';
import './index.scss';

export default function Home() {
  const { getAllRooms, error, loading, rooms } = useContext(RoomContext);

  useEffect(() => {
    getAllRooms();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='home container'>
      <h1>home</h1>
      <h2 className='home__subtitle'>Check out these fantastic stays</h2>
      {error ? (
        <Error error='Something went wrong. Please try again later' />
      ) : (
        <div className='home__rooms'>
          {rooms.map((room) => {
            return <HomeRooms key={room._id} room={room} />;
          })}
        </div>
      )}
    </section>
  );
}
