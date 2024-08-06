import { useContext, useEffect } from 'react';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import AdminFilter from '../../../components/Admin/AdminFilter';
import Table from '../../../components/Admin/Table';
import { AdminContext } from '../../../contexts/AdminContext';

export default function AllUsers() {
  const { getAllUsers, allUsers, error, loading } = useContext(AdminContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='allusers'>
      <h1 className='table__title'>Todos os usuários</h1>

      <AdminFilter
        id='users'
        label='Pesquise pelo ID, nome ou email do usuário'
        options={['administrador', 'usuário']}
      />

      {error && <Error error='Erro ao carregar os dados.' />}
      <Table
        id='users'
        array={allUsers}
        headerNames={[
          'Data de Criação',
          'ID do Usuário',
          'Nome',
          'Email',
          'Administrador',
        ]}
      />
    </section>
  );
}
