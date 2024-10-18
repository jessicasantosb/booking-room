import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import GoogleLogin from '../../components/GoogleLogin';
import Input from '../../components/ui/Input';
import TermsFooter from '../../components/TermsFooter';
import Error from '../../components/interfaces/Error';
import { UserContext } from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';
import './index.scss';

export default function Register() {
  const nameProps = useForm();
  const emailProps = useForm('email');
  const passwordProps = useForm('password');
  const confirmPasswordProps = useForm();

  const { userRegister, error, loading } = useContext(UserContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = nameProps.value;
    const email = emailProps.value;
    const password = passwordProps.value;
    const confirmPassword = confirmPasswordProps.value;

    const user = { name, email, password };

    if (password !== confirmPassword)
      return alert('As senhas devem ser iguais.');

    if (
      nameProps.validate() &&
      emailProps.validate() &&
      passwordProps.validate()
    ) {
      userRegister(user);
    }
  };

  return (
    <section className='register container'>
      {error && <Error error='Erro ao fazer o registro.' />}
      <main className='register__content'>
        <h1 className='register__title'>Create an account</h1>

        <form onSubmit={handleRegister}>
          <Input placeholder='Nome' type='text' name='name' {...nameProps} />
          <Input
            placeholder='E-mail'
            type='email'
            name='email'
            {...emailProps}
          />
          <Input
            placeholder='Crie uma senha'
            type='password'
            name='password'
            {...passwordProps}
          />
          <Input
            placeholder='Confirme a senha'
            type='password'
            name='confirmPassword'
            {...confirmPasswordProps}
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
