import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import './index.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      const response = await axios.post('/api/users/login', user);
      if (response.data) {
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='login container'>
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

          <button className='login__button' type='submit'>
            login
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
