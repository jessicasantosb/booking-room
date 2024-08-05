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

export default function Login() {
  const emailProps = useForm('email');
  const passwordProps = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (emailProps.validate() && passwordProps.validate()) {
      const email = emailProps.value;
      const password = passwordProps.value;

      const user = { email, password };

      userLogin(user);
    }
  };

  return (
    <section className='login container'>
      {error && <Error error='Email ou senha incorreto.' />}
      <main className='login__content'>
        <h1 className='login__title'>Faça login</h1>

        <form onSubmit={handleLogin}>
          <Input placeholder='E-mail' type='email' name='email' {...emailProps} />
          <Input
            placeholder='Senha'
            type='password'
            name='password'
            {...passwordProps}
          />

          <Button text='entrar' type='submit' loading={loading} />
        </form>

        <p>
          Ainda não possui uma conta?{' '}
          <Link to={'/register'} className='login__link'>
            Registre-se
          </Link>
        </p>

        <GoogleLogin />
        <TermsFooter />
      </main>
    </section>
  );
}
