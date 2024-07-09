import { useContext, useEffect } from 'react';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function AllRooms() {
  const { getAllRooms, allRooms, error, loading } = useContext(AdminContext);

  useEffect(() => {
    getAllRooms();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='allrooms'>
      {error && <Error error='' />}
      <h1 className='allrooms__title'>Todos os quartos disponíveis</h1>
      <div className='allrooms__table'>
        <div className='allrooms__table--header'>
          <p>ID da Quarto</p>
          <p>Nome</p>
          <p>Tipo</p>
          <p>Valor por dia</p>
          <p>Máx. de pessoas</p>
          <p>Contato</p>
        </div>
        {allRooms.map(
          ({ _id, name, type, rentproperty, maxcount, phonenumber }) => {
            return (
              <div key={_id} className='allrooms__table--content'>
                <p>{_id}</p>
                <p>{name}</p>
                <p>{type}</p>
                <p>
                  {rentproperty.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
                <p>{maxcount}</p>
                <p>{phonenumber}</p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
