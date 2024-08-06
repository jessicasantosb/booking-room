import './index.scss';

export default function Table({ id, array, headerNames }) {
  return (
    <div className='tableWrapper'>
      <table className='table'>
        <thead>
          <tr className='table__header'>
            {headerNames.map((name, index) => {
              return <th key={index}>{name}</th>;
            })}
          </tr>
        </thead>

        {array.map((item) => {
          return (
            <tbody key={item._id}>
              <tr className='table__content'>
                <td>{new Date(item.createdAt).toLocaleDateString('pt-BR')}</td>
                <td>{item._id}</td>

                {id === 'bookings' && (
                  <>
                    <td>{item.userid}</td>
                    <td>{item.room}</td>
                    <td>{item.fromdate}</td>
                    <td>{item.todate}</td>
                    <td>{item.status}</td>
                  </>
                )}
                {id === 'rooms' && (
                  <>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>
                      {item.rentproperty.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </td>
                    <td>{item.maxcount}</td>
                    <td>{item.phonenumber}</td>
                  </>
                )}
                {id === 'users' && (
                  <>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
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
