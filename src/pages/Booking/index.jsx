import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import BookingSuccess from '../../components/BookingSuccess';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import { RoomContext } from '../../contexts/RoomContext';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function Booking() {
  const [success, setSuccess] = useState(false);
  const { getRoom, bookRoom, error, loading, room } = useContext(RoomContext);
  const { user } = useContext(UserContext);
  const { roomid, fromDate, toDate } = useParams();
  const navigate = useNavigate();

  const from = dayjs(fromDate);
  const to = dayjs(toDate);
  const totalDays = to.diff(from, 'day');

  const totalAmount = totalDays * room.rentproperty;

  const onToken = (token) => {
    bookRoom(
      room,
      roomid,
      user._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      token
    );
    setSuccess(true);
  };

  const handleNavigate = () => {
    navigate('/bookings');
  };

  const handleModalOutsideClick = (event) => {
    if (event.target === event.currentTarget) navigate('/bookings');
  };

  useEffect(() => {
    getRoom(roomid);
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='container'>
      <Link to={'/'} className='link'>
        voltar para todos os quartos
      </Link>

      {success && (
        <BookingSuccess
          handleModalOutsideClick={handleModalOutsideClick}
          handleNavigate={handleNavigate}
        />
      )}

      {error ? (
        <Error error='Algo deu errado. Tente novamente mais tarde, por favor!' />
      ) : (
        <main className='booking'>
          <div>
            <h2 className='title'>{room.name}</h2>
            <div className='booking__images'>
              <img src={room.imageurls && room.imageurls[0]} alt={room.name} />;
            </div>
          </div>

          <div>
            <div className='booking__content'>
              <h2 className='title booking__title'>Detalhes da sua reserva</h2>
              <p>
                Nome: <span>{user?.name}</span>
              </p>
              <p>
                Do dia: <span>{fromDate}</span>
              </p>
              <p>
                Até o dia: <span>{toDate}</span>
              </p>
              <p>
                Máximo de lugares: <span>{room.maxcount}</span>
              </p>

              <h3 className='title booking__subtitle'>Total</h3>
              <p>
                Total de dias: <span>{totalDays}</span>
              </p>
              <p>
                Preço por dia:{' '}
                <span>
                  {room?.rentproperty?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </p>
              <p>
                Total:
                <span>
                  {totalAmount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </p>
            </div>

            <StripeCheckout
              name='BookingRoom.com'
              description='alugue seu quarto'
              image='https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png'
              panelLabel='Pague'
              amount={totalAmount * 100}
              currency='BRL'
              token={onToken}
              stripeKey='pk_test_51PXUh0GvxCcFMXvLZhpSDdfn26mYzjgRKPzqGN3vA0VEC3DO64je2XnwTOQS5vQz8VQuuvgxBBJ6ACH0euXmVear0049p8nuzJ'
            >
              <button className='button'>Pagar agora</button>
            </StripeCheckout>
          </div>
        </main>
      )}
    </section>
  );
}
