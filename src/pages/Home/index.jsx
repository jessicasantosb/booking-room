import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useContext, useEffect, useState } from 'react';

import HomeHeader from '../../components/HomeHeader';
import HomeRooms from '../../components/HomeRooms';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';

import { RoomContext } from '../../contexts/RoomContext';

import { FaCalendar, FaMoon, FaTag } from 'react-icons/fa';
import './index.scss';

dayjs.extend(isBetween);

export default function Home() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [searchKey, setSearchKey] = useState('');

  const { getAllRooms, error, loading, rooms, setRooms, duplicateRooms } =
    useContext(RoomContext);

  const handleFilterByDate = (dates) => {
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

  const handleFilterByName = () => {
    const temprooms = duplicateRooms.filter((room) =>
      room.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setRooms(temprooms);
  };

  const handleFilterByType = (searchType) => {
    if (searchType !== 'Todos') {
      const temprooms = duplicateRooms.filter(
        (room) => room.type.toLowerCase() === searchType.toLowerCase()
      );
      setRooms(temprooms);
    } else {
      setRooms(duplicateRooms);
    }
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='home container'>
      <HomeHeader
        handleFilterByDate={handleFilterByDate}
        handleFilterByName={handleFilterByName}
        handleFilterByType={handleFilterByType}
        setSearchKey={setSearchKey}
        searchKey={searchKey}
      />

      <div className='home__separator'>
        <h3>Experiências únicas esperam por você</h3>
        <div className='home__carousel'>
          <div className='home__carousel--item'>
            <FaMoon size={70} />
            <p>Desfrute de vantagens exclusivas durante sua estadia</p>
          </div>
          <div className='home__carousel--item'>
            <FaTag size={70} />
            <p>Reserve agora e acumule pontos para futuras estadias</p>
          </div>
          <div className='home__carousel--item'>
            <FaCalendar size={70} />
            <p>Flexibilidade total com nossa política de cancelamento</p>
          </div>
        </div>
      </div>

      <h2 className='home__title'>Confira estes quartos incríveis</h2>
      {error ? (
        <Error error='Algo deu errado. Por favor, tente novamente mais tarde.' />
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
