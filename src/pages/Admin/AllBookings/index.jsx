import { useContext, useEffect } from 'react';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function AllBookings() {
  const { getAllBookings, allBookings, error, loading } =
    useContext(AdminContext);

  useEffect(() => {
    getAllBookings();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='allbookings'>
      {error && <Error error='' />}
      <h1 className='allbookings__title'>Todas as reservas</h1>
      <div className='allbookings__table'>
        <div className='allbookings__table--header'>
          <p>ID da Reserva</p>
          <p>ID do Usuário</p>
          <p>Quarto</p>
          <p>Check in</p>
          <p>Check out</p>
          <p>Status</p>
        </div>
        {allBookings.map(({ _id, userid, room, fromdate, todate, status }) => {
          return (
            <div key={_id} className='allbookings__table--content'>
              <p>{_id}</p>
              <p>{userid}</p>
              <p>{room}</p>
              <p>{fromdate}</p>
              <p>{todate}</p>
              <p>{status}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
