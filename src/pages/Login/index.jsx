import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import Error from '../../components/interfaces/Error';
import { UserContext } from '../../contexts/UserContext';
import './index.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userLogin, error, loading } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = { email, password };

    userLogin(user);
  };

  return (
    <section className='login container'>
      {error && <Error error='Login failed. Please try again later.' />}
      <main className='login__content'>
        <h1 className='login__title'>Login</h1>

        <form onSubmit={handleLogin}>
          <Input
            placeholder='Your email'
            type='email'
            name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder='Create a password'
            type='password'
            name={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
