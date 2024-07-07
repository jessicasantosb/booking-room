import { useContext } from 'react'
import './index.scss'
import { UserContext } from '../../contexts/UserContext'

export default function Profile() {
  const {user} = useContext(UserContext)

  return (
    <div className='profile'>
      <p>
        Nome: <span>{user.name}</span>
      </p>
      <p>
        Email: <span>{user.email}</span>
      </p>
      <p>
        Administrador: <span>{user.isAdmin ? 'Sim' : 'Não'}</span>
      </p>
      <button className='profile__button'>Liberar acesso como Administrador</button>
    </div>
  );
}
