import { useContext, useEffect } from 'react';
import ProfileBookings from '../../../components/UserProfile/ProfileBookings';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { RoomContext } from '../../../contexts/RoomContext';
import { UserContext } from '../../../contexts/UserContext';
import './index.scss';

export default function Bookings() {
  const { getUserBookings, cancelBooking, userBookings, loading, error } =
    useContext(RoomContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) getUserBookings(user._id);
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div className='bookings'>
      <h2 className='bookings__title'>Olá, {user?.name}!</h2>
      <div className='bookings__subtitle'>
        <h3>Suas reservas</h3>
        <p className='bookings__subtitle--count'>{userBookings.length}</p>
      </div>
      {error ? (
        <Error error='Algo deu errado. Tente novamente mais tarde, por favor!' />
      ) : (
        <div className='bookings__rooms'>
          {userBookings.map(
            ({
              _id,
              createdAt,
              room,
              roomid,
              fromdate,
              todate,
              totalamount,
              totaldays,
              status,              
            }) => {
              return (
                <ProfileBookings
                  key={_id}
                  id={_id}
                  createdAt={createdAt}
                  room={room}
                  fromdate={fromdate}
                  todate={todate}
                  totalamount={totalamount}
                  totaldays={totaldays}
                  status={status}
                  handleCancelBooking={() => cancelBooking(_id, roomid)}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
