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
    <section className='allUsers'>
      {error && <Error error='' />}
      <h1 className='allUsers__title'>Todos os usuários</h1>
      <div className='allUsers__table'>
        <div className='allUsers__table--header'>
          <p>ID do Usuário</p>
          <p>Nome</p>
          <p>Email</p>
          <p>Administrador</p>
        </div>
        {allUsers.map(({ _id, name, email, isAdmin }) => {
          return (
            <div key={_id} className='allUsers__table--content'>
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
