import './index.scss';

export default function ProfileRooms({
  id,
  createdAt,
  room,
  fromdate,
  todate,
  totalamount,
  totaldays,
  status,
  handleCancelBooking,
}) {
  const date = new Date(createdAt).toLocaleDateString('pt-BR');
  const total = totalamount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className='profileCard'>
      <div className='profileCard__div'>
        <p>{date}</p>
        <p>{room}</p>
      </div>
      <p>ID da reserva: {id}</p>

      <div className='profileCard__div'>
        <p>
          Check in: <span>{fromdate}</span>
        </p>
        <p>
          Check out: <span>{todate}</span>
        </p>
      </div>

      <div className='profileCard__div'>
        <p>
          Valor total: <span>{total}</span>
        </p>
        <p>
          Total de dias: <span>{totaldays}</span>
        </p>
      </div>
      <p className='profileCard__status'>
        Status:{' '}
        <span
          className={`profileCard__tag ${
            status === 'reservado'
              ? 'profileCard__tag--booked'
              : 'profileCard__tag--canceled'
          }`}
        >
          {status}
        </span>{' '}
      </p>

      {status !== 'cancelado' && (
        <button
          className='button profileCard__button'
          onClick={handleCancelBooking}
        >
          cancelar reserva
        </button>
      )}
    </div>
  );
}
