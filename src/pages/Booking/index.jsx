import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import { CiCreditCard1 } from 'react-icons/ci';
import { IoIosCopy } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import BookingSuccess from '../../components/BookingSuccess';
import Button from '../../components/Button';
import Error from '../../components/interfaces/Error';
import Loading from '../../components/interfaces/Loading';
import { RoomContext } from '../../contexts/RoomContext';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function Booking() {
  const [success, setSuccess] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [copied, setCopied] = useState(false);
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
    navigate('/profile/bookings');
  };

  const handleModalOutsideClick = (event) => {
    if (event.target === event.currentTarget) navigate('/profile/bookings');
  };

  const handleCopyNumber = () => {
    const copy = navigator.clipboard.writeText('4242424242424242');

    if (copy) setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    getRoom(roomid);
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='container'>
      <div className='booking--link'>
        <Link to={'/'}>Voltar para todos os quartos</Link>
      </div>

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
            <h2>{room.name}</h2>
            <div className='booking__images'>
              <img src={room.imageurls && room.imageurls[0]} alt={room.name} />
            </div>
          </div>

          <div>
            <div className='booking__content'>
              <h2 className='booking__title'>Detalhes da sua reserva</h2>
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
                Capacidade máxima: <span>{room.maxcount}</span>
              </p>

              <h3 className='booking__subtitle'>Total</h3>
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
              image='https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              panelLabel='Pague'
              amount={totalAmount * 100}
              currency='BRL'
              token={onToken}
              stripeKey='pk_test_51PXUh0GvxCcFMXvLZhpSDdfn26mYzjgRKPzqGN3vA0VEC3DO64je2XnwTOQS5vQz8VQuuvgxBBJ6ACH0euXmVear0049p8nuzJ'
            >
              <Button text='Pagar agora' type='button' />
            </StripeCheckout>

            <div
              className='booking__card'
              style={{ bottom: showCard ? '0' : '-145px' }}
            >
              <button
                className='booking__card--button'
                onClick={() => setShowCard(!showCard)}
              >
                <CiCreditCard1 size={24} />
              </button>
              <div>
                <p>Número do cartão: </p>
                <p className='booking__card--number' onClick={handleCopyNumber}>
                  4242 4242 4242 4242 <IoIosCopy size={12} />
                </p>
                <div
                  className='booking__card--popup'
                  style={{ display: copied ? 'block' : 'none' }}
                >
                  copiado!
                </div>
              </div>
              <p>Data de vencimento no futuro</p>
              <p>Código de segurança aleatório</p>
            </div>
          </div>
        </main>
      )}
    </section>
  );
}
