import { useSearchParams } from 'react-router-dom';
import Highlight from '../../interfaces/Highlight';
import './index.scss';

export default function Table({ id, array, headerNames, handleDelete }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className='tableWrapper'>
      <table className='table'>
        <thead>
          <tr className='table__header'>
            {headerNames.map((name, index) => {
              return <th key={index}>{name}</th>;
            })}
            {id === 'rooms' && <th>Deletar</th>}
          </tr>
        </thead>

        {array.map((item) => {
          return (
            <tbody key={item._id}>
              <tr className='table__content'>
                <td>{new Date(item.createdAt).toLocaleDateString('pt-BR')}</td>
                <td>
                  <Highlight toHighlight={query}>{item._id}</Highlight>
                </td>

                {id === 'bookings' && (
                  <>
                    <td>
                      <Highlight toHighlight={query}>{item.userid}</Highlight>
                    </td>
                    <td>
                      <Highlight toHighlight={query}>{item.room}</Highlight>
                    </td>
                    <td>{item.fromdate}</td>
                    <td>{item.todate}</td>
                    <td>{item.status}</td>
                  </>
                )}

                {id === 'rooms' && (
                  <>
                    <td>
                      <Highlight toHighlight={query}>{item.name}</Highlight>
                    </td>
                    <td>{item.type}</td>
                    <td>
                      {item.rentproperty.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </td>
                    <td>{item.maxcount}</td>
                    <td>{item.phonenumber}</td>
                    <td>
                      <button
                        className='table__button'
                        onClick={() => handleDelete(item._id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </>
                )}

                {id === 'users' && (
                  <>
                    <td>
                      <Highlight toHighlight={query}>{item.name}</Highlight>
                    </td>
                    <td>
                      <Highlight toHighlight={query}>{item.email}</Highlight>
                    </td>
                    <td>{item.isAdmin ? 'Sim' : 'Não'}</td>
                  </>
                )}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
