import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Error from '../../../components/interfaces/Error';
import Loading from '../../../components/interfaces/Loading';
import { AdminContext } from '../../../contexts/AdminContext';
import './index.scss';

export default function CreateRoom() {
  const [name, setName] = useState('');
  const [rentPerDay, setRentPerDay] = useState('');
  const [maxCount, setMaxCount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [type, setType] = useState('');
  const [imageurl1, setImageurl1] = useState('');
  const [imageurl2, setImageurl2] = useState('');
  const [imageurl3, setImageurl3] = useState('');
  const [description, setDescription] = useState('');

  const { createRoom, loading, error } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleCreateRoom = (e) => {
    e.preventDefault();

    const newroom = {
      name,
      rentPerDay,
      maxCount,
      phoneNumber,
      type,
      imageurl1,
      imageurl2,
      imageurl3,
      description,
    };

    createRoom(newroom);
    navigate('/admin/rooms');
  };

  if (loading) return <Loading />;

  return (
    <section className='createRoom'>
      <h1>Cadastrar um quarto</h1>
      {error && (
        <Error error='Algo deu errado. Por favor, tente novamente mais tarde.' />
      )}
      <form onSubmit={handleCreateRoom} className='createRoom__form'>
        <Input
          placeholder='Nome do quarto'
          type='text'
          name={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='Preço por dia'
          type='number'
          name={rentPerDay}
          value={rentPerDay}
          onChange={(e) => setRentPerDay(e.target.value)}
        />
        <Input
          placeholder='Quantidade de pessoas'
          type='number'
          name={maxCount}
          value={maxCount}
          onChange={(e) => setMaxCount(e.target.value)}
        />
        <Input
          placeholder='Número para contato'
          type='number'
          name={phoneNumber}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          placeholder='Tipo'
          type='text'
          name={type}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <Input
          placeholder='Url da imagem'
          type='text'
          name={imageurl1}
          value={imageurl1}
          onChange={(e) => setImageurl1(e.target.value)}
        />
        <Input
          placeholder='Url da imagem'
          type='text'
          name={imageurl2}
          value={imageurl2}
          onChange={(e) => setImageurl2(e.target.value)}
        />
        <Input
          placeholder='Url da imagem'
          type='text'
          name={imageurl3}
          value={imageurl3}
          onChange={(e) => setImageurl3(e.target.value)}
        />
        <textarea
          className='createRoom__form--description'
          placeholder='Descrição'
          name={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows='5'
        ></textarea>

        <Button text='Enviar' type='submit' />
      </form>
    </section>
  );
}
