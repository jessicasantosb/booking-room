import { FcGoogle } from 'react-icons/fc';
import './index.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function GoogleLogin() {
  const { userGoogleLogin } = useContext(UserContext);

  return (
    <div className='googleLogin'>
      <p className='googleLogin__divisor'>ou </p>
      <button className='googleLogin__button' onClick={() => userGoogleLogin()}>
        <div className='googleLogin__icon'>
          <FcGoogle size={32} />
        </div>
        Fazer login com o Google
      </button>
    </div>
  );
}
