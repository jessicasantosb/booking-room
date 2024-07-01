import { IoClose } from 'react-icons/io5';
import './index.scss';
import { useState } from 'react';

export default function BookingModal({
  handleBooking,
  handleModalOutsideClick,
  handleCloseModal,
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div className='modal' onClick={handleModalOutsideClick}>
      <div className='modal__content modal__content--booking'>
        <button className='modal__button' onClick={handleCloseModal}>
          <IoClose />
        </button>

        <h2 className='modal__title'>Este aplicativo não está operacional!</h2>
        <label className='modal__label'>
          <input
            className='modal__checkbox'
            type='checkbox'
            onChange={() => setChecked(!checked)}
          />
          Entendo que não devo enviar informações pessoais ou sensíveis.
        </label>
        <button
          className={checked ? 'button' : 'button--disable'}
          disabled={!checked}
          onClick={handleBooking}
        >
          Ir para a tela de pagamento
        </button>
      </div>
    </div>
  );
}
