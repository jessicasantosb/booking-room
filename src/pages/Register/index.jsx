import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import './index.scss';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const user = { name, email, password, confirmPassword };
      
      try {
        await axios.post('/api/users/register', user).data;
        navigate('/login', { replace: true });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Password not matched');
    }
  };

  return (
    <section className='register container'>
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

          <button className='register__button' type='submit'>
            register
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
