import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import Error from '../../components/interfaces/Error';
import './index.scss';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const user = { name, email, password, confirmPassword };
      try {
        setLoading(true);
        const response = await axios.post('/api/users/register', user);

        if (response.data) {
          navigate('/login', { replace: true });
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    } else {
      alert('Password not matched');
    }
  };

  return (
    <section className='register container'>
      {error && <Error error='Register failed. Please try again later.' />}
      <main className='register__content'>
        <h1 className='register__title'>Create an account</h1>

        <form onSubmit={handleRegister}>
          <Input
            placeholder='Your name'
            type='text'
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            placeholder='Confirm password'
            type='password'
            name={confirmPassword}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className={`button ${loading && 'button--disable'}`}
            type='submit'
          >
            register{' '}
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
