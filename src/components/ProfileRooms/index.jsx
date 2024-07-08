import './index.scss';

export default function ProfileRooms({
  createdAt,
  room,
  fromdate,
  todate,
  totalamount,
  totaldays,
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

      <div className='profileCard__div'>
        <p>
          Do dia: <span>{fromdate}</span>
        </p>
        <p>
          Até o dia: <span>{todate}</span>
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
    </div>
  );
}
