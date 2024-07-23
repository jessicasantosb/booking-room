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
      <h1 className='table__title'>Todas as reservas</h1>
      {error && <Error error='Erro ao carregar os dados.' />}
      <div className='table'>
        <div className='table__header allbookings__tableHeader'>
          <p>ID da Reserva</p>
          <p>ID do Usuário</p>
          <p>Quarto</p>
          <p>Check in</p>
          <p>Check out</p>
          <p>Status</p>
        </div>
        {allBookings.map(({ _id, userid, room, fromdate, todate, status }) => {
          return (
            <div key={_id} className='table__content allbookings__tableContent'>
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
