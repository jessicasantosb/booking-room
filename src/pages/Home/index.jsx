import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useContext, useEffect, useState } from 'react';

import HomeHeader from '../../components/HomeHeader';
import HomeRooms from '../../components/HomeRooms';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';

import { RoomContext } from '../../contexts/RoomContext';

import './index.scss';

dayjs.extend(isBetween);

export default function Home() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const { getAllRooms, error, loading, rooms, setRooms, duplicateRooms } =
    useContext(RoomContext);

  const filterByDate = (dates) => {
    const firstDate = dayjs(dates[0]).format('MM-DD-YYYY');
    const secondDate = dayjs(dates[1]).format('MM-DD-YYYY');

    setFromDate(firstDate);
    setToDate(secondDate);

    let tempRooms = [];
    let availability = false;

    duplicateRooms.forEach((room) => {
      const roomBookingsLength = room.currentbookings.length;

      if (roomBookingsLength > 0) {
        room.currentbookings.forEach((booking) => {
          const bookingFrom = booking.fromDate;
          const bookingTo = booking.toDate;

          if (
            !dayjs(firstDate).isBetween(bookingFrom, bookingTo, 'day') &&
            !dayjs(secondDate).isBetween(bookingFrom, bookingTo, 'day')
          ) {
            if (
              firstDate !== (bookingFrom && bookingTo) &&
              secondDate !== (bookingFrom && bookingTo)
            ) {
              availability = true;
            }
          }
        });
      }

      if (availability == true || roomBookingsLength == 0) {
        tempRooms.push(room);
      }
    });
    setRooms(tempRooms);
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
