import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import Input from '../../components/Input';
import TermsFooter from '../../components/TermsFooter';
import Error from '../../components/interfaces/Error';
import { UserContext } from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';
import './index.scss';

export default function Register() {
  const name = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const confirmPassword = useForm('confirmPassword');

  const { userRegister, error, loading } = useContext(UserContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const nameValue = name.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if (passwordValue !== confirmPasswordValue) {
      alert('As senhas devem ser iguais.');
      return;
    }

    if (
      name.validate() &&
      email.validate() &&
      password.validate() &&
      confirmPassword.validate()
    ) {
      const user = {
        nameValue,
        emailValue,
        passwordValue,
        confirmPasswordValue,
      };

      userRegister(user);
    }
  };

  return (
    <section className='register container'>
      {error && <Error error='Erro ao fazer o registro.' />}
      <main className='register__content'>
        <h1 className='register__title'>Create an account</h1>

        <form onSubmit={handleRegister}>
          <Input placeholder='Your name' type='text' name='name' {...name} />
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
          <Input
            placeholder='Confirm password'
            type='password'
            name='confirmPassword'
            {...confirmPassword}
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
