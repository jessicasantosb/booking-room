import { useContext, useEffect } from 'react';
import ProfileRooms from '../../components/ProfileRooms';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import { RoomContext } from '../../contexts/RoomContext';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function Bookings() {
  const { getUserBookings, userBookings, loading, error } =
    useContext(RoomContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) getUserBookings(user._id);
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div className='bookings'>
      <h2 className='bookings__title'>Olá, {user?.name}!</h2>
      <h3 className='bookings__subtitle'>Suas reservas</h3>
      {error ? (
        <Error error='Algo deu errado. Tente novamente mais tarde, por favor!' />
      ) : (
        <div className='bookings__rooms'>
          {userBookings.map(
            ({
              _id,
              createdAt,
              room,
              fromdate,
              todate,
              totalamount,
              totaldays,
            }) => {
              return (
                <ProfileRooms
                  key={_id}
                  createdAt={createdAt}
                  room={room}
                  fromdate={fromdate}
                  todate={todate}
                  totalamount={totalamount}
                  totaldays={totaldays}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
