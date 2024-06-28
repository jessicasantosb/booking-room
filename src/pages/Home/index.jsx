import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';

import HomeHeader from '../../components/HomeHeader';
import HomeRooms from '../../components/HomeRooms';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';

import { RoomContext } from '../../contexts/RoomContext';

import './index.scss';

export default function Home() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const { getAllRooms, error, loading, rooms } = useContext(RoomContext);

  const filterByDate = (dates) => {
    setFromDate(dayjs(dates[0]).format('DD-MM-YYYY'));
    setToDate(dayjs(dates[1]).format('DD-MM-YYYY'));
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='home container'>
      <HomeHeader filterByDate={filterByDate} />

      <h2 className='home__subtitle'>Check out these fantastic stays</h2>
      {error ? (
        <Error error='Something went wrong. Please try again later' />
      ) : (
        <div className='home__rooms'>
          {rooms.map((room) => {
            return (
              <HomeRooms
                key={room._id}
                room={room}
                fromDate={fromDate}
                toDate={toDate}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
