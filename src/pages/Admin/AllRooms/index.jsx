import { useContext, useEffect } from 'react';
import AdminFilter from '../../../components/Admin/AdminFilter';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import Table from '../../../components/Admin/Table';

export default function AllRooms() {
  const { getAllRooms, deleteRoom, allRooms, error, loading } =
    useContext(AdminContext);

  const handleDeleteRoom = (roomid) => {    
    deleteRoom(roomid);
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='allrooms'>
      <h1 className='table__title'>Todos os quartos disponíveis</h1>

      <AdminFilter
        id='rooms'
        label='Pesquise pelo ID ou nome do quarto'
        options={['Padrão', 'Suíte', 'Individual']}
      />

      {error && <Error error='Erro ao carregar os dados.' />}
      <Table
        id='rooms'
        array={allRooms}
        headerNames={[
          'Data de Criação',
          'ID do Quarto',
          'Nome do Quarto',
          'Tipo',
          'Diária',
          'Máx. de Pessoas',
          'Contato',
        ]}
        handleDelete={handleDeleteRoom}
      />
    </section>
  );
}
