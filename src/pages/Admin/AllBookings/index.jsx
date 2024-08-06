import { useContext, useEffect } from 'react';
import AdminFilter from '../../../components/Admin/AdminFilter';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import Table from '../../../components/Admin/Table';

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

      <AdminFilter
        id='bookings'
        label='Pesquise pelo ID do usuário, ID da reserva ou nome do quarto'
        options={['reservado', 'cancelado']}
      />

      {error && <Error error='Erro ao carregar os dados.' />}
      <Table
        id='bookings'
        array={allBookings}
        headerNames={[
          'Data da Reserva',
          'ID da Reserva',
          'ID do Usuário',
          'Nome do quarto',
          'Check in',
          'Check out',
          'Status',
        ]}
      />
    </section>
  );
}
