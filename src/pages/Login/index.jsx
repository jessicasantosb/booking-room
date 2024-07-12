import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import Error from '../../components/interfaces/Error';
import { UserContext } from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';
import './index.scss';

export default function Login() {
  const email = useForm('email');
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.validate() && password.validate()) {
      const emailValue = email.value;
      const passwordValue = password.value;

      const user = { emailValue, passwordValue };

      userLogin(user);
    }
  };

  return (
    <section className='login container'>
      {error && <Error error='Email ou senha incorreto.' />}
      <main className='login__content'>
        <h1 className='login__title'>Login</h1>

        <form onSubmit={handleLogin}>
          <Input
            placeholder='Your email'
            type='email'
            name='email'
            {...email}
          />
          <Input
            placeholder='Create a password'
            type='password'
            name='password'
            {...password}
          />

          <button
            className={`button ${loading && 'button--disable'}`}
            type='submit'
          >
            login{' '}
            {loading && (
              <BeatLoader
                color='#191e3b'
                size={2}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            )}
          </button>
        </form>

        <p>
          Still don&apos;t have a account?{' '}
          <Link to={'/register'} className='login__link'>
            Register
          </Link>
        </p>
      </main>

      <TermsFooter />
    </section>
  );
}
