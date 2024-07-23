import { useContext, useEffect } from 'react';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function AllUsers() {
  const { getAllUsers, allUsers, error, loading } = useContext(AdminContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='allusers'>
      <h1 className='table__title'>Todos os usuários</h1>
      {error && <Error error='Erro ao carregar os dados.' />}
      <div className='table'>
        <div className='table__header allusers__tableHeader'>
          <p>ID do Usuário</p>
          <p>Nome</p>
          <p>Email</p>
          <p>Administrador</p>
        </div>
        {allUsers.map(({ _id, name, email, isAdmin }) => {
          return (
            <div key={_id} className='table__content allusers__tableContent'>
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
