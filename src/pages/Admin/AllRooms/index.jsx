import { useContext, useEffect } from 'react';
import TableFilter from '../../../components/Admin/TableFilter';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function AllRooms() {
  const { getAllRooms, allRooms, duplicateRooms, setAllRooms, error, loading } =
    useContext(AdminContext);

  useEffect(() => {
    getAllRooms();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='allrooms'>
      <h1 className='table__title'>Todos os quartos disponíveis</h1>

      <TableFilter
        id='rooms'
        label='Pesquise pelo ID do usuário ou nome do quarto'
        searchResults={duplicateRooms}
        setSearchResults={setAllRooms}
      />

      {error && <Error error='Erro ao carregar os dados.' />}
      <div className='table'>
        <div className='table__header allrooms__tableHeader'>
          <p>ID da Quarto</p>
          <p>Nome do quarto</p>
          <p>Tipo</p>
          <p>Valor por dia</p>
          <p>Máx. de pessoas</p>
          <p>Contato</p>
        </div>
        {allRooms.map(
          ({ _id, name, type, rentproperty, maxcount, phonenumber }) => {
            return (
              <div key={_id} className='table__content allrooms__tableContent'>
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
