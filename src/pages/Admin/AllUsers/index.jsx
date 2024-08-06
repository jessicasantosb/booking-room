import { useContext, useEffect } from 'react';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';
import AdminFilter from '../../../components/Admin/AdminFilter';

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
      <div className='table'>
        <div className='table__header allusers__tableHeader'>
          <p>Data de Criação</p>
          <p>ID do Usuário</p>
          <p>Nome</p>
          <p>Email</p>
          <p>Administrador</p>
        </div>
        {allUsers.map(({ _id, createdAt, name, email, isAdmin }) => {
          return (
            <div key={_id} className='table__content allusers__tableContent'>
              <p>{new Date(createdAt).toLocaleDateString('pt-BR')}</p>
              <p>{_id}</p>
              <p>{name}</p>
              <p>{email}</p>
              <p>{isAdmin ? 'Sim' : 'Não'}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
