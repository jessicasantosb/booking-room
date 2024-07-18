import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import GoogleLogin from '../../components/GoogleLogin';
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
          <Input placeholder='Nome' type='text' name='name' {...name} />
          <Input placeholder='E-mail' type='email' name='email' {...email} />
          <Input
            placeholder='Crie uma senha'
            type='password'
            name='password'
            {...password}
          />
          <Input
            placeholder='Confirme a senha'
            type='password'
            name='confirmPassword'
            {...confirmPassword}
          />

          <Button text='registrar' type='submit' loading={loading} />
        </form>

        <p>
          Já possui uma conta?{' '}
          <Link to={'/login'} className='register__link'>
            Login
          </Link>
        </p>

        <GoogleLogin />
        <TermsFooter />
      </main>
    </section>
  );
}
