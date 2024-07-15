import { CiCircleCheck } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

import Button from '../Button';
import './index.scss';
export default function BookingSuccess({
  handleModalOutsideClick,
  handleNavigate,
}) {
  return (
    <div className='modal bookingModal' onClick={handleModalOutsideClick}>
      <div className='modal__content bookingModal__content'>
        <button className='modal__button' onClick={handleNavigate}>
          <IoClose />
        </button>
        <div className='bookingModal__content--icon '>
          <CiCircleCheck size={64} />
        </div>
        <h1 className='bookingModal__content--title'>Parabéns!</h1>
        <p className='bookingModal__content--text'>
          Seu quarto foi reservado com sucesso!
        </p>
        <Button text='ok' type='button' onClick={handleNavigate} />
      </div>
    </div>
  );
}
