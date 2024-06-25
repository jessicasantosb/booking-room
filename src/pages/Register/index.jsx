import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import './index.scss';

export default function Register() {
  return (
    <section className='register container'>
      <main className='register__content'>
        <h1 className='register__title'>Create an account</h1>

        <form>
          <Input label='Name: ' type='text' placeholder='Your name ' />
          <Input placeholder='Create a password' type='password' />
          <Input placeholder='Confirm password' type='password' />
          <button className='register__button'>register</button>
        </form>

        <p>
          Already have a account?{' '}
          <Link to={'/login'} className='register__link'>
            Login
          </Link>
        </p>
      </main>

      <TermsFooter />
    </section>
  );
}
