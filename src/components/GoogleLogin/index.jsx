import { FcGoogle } from 'react-icons/fc';
import './index.scss';

export default function GoogleLogin() {
  return (
    <div className='googleLogin'>
      <p className='googleLogin__divisor'>ou </p>
      <button className='googleLogin__button'>
        <div className='googleLogin__icon'>
          <FcGoogle size={32} />
        </div>
        Fazer login com o Google
      </button>
    </div>
  );
}
