import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import './index.scss';

export default function Login() {
  return (
    <section className='login container'>
      <main className='login__content'>
        <h1 className='login__title'>Login</h1>

        <form>
          <Input label='Name' type='text' placeholder='Your name ' />
          <Input placeholder='Your password' type='password' />
          <button className='login__button'>login</button>
        </form>

        <p>
          Still don't have a account?{' '}
          <Link to={'/register'} className='login__link'>
            Register
          </Link>
        </p>
      </main>

      <TermsFooter />
    </section>
  );
}
