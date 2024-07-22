import { useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import HomeModal from '../HomeModal';
import Image from '../interfaces/Images';
import './index.scss';
export default function HomeRooms({ room, fromDate, toDate }) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleModalOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModal(false);
  };

  return (
    <>
      <div className='card'>
        <Image src={room.imageurls[0]} alt={room.name} />
        <p className='card__type'>{room.type}</p>
        <h3 className='card__name'>{room.name}</h3>

        <p className='card__maxcount'>
          Capacidade máxima:{' '}
          <span>
            {room.maxcount} {room.maxcount <= 1 ? 'pessoa' : 'pessoas'}
          </span>
        </p>
        <p className='card__phonenumber'>
          Contato: <span>{room.phonenumber}</span>
        </p>
        <p className='card__price'>
          {room.rentproperty.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
          <span className='card__price--text'>por diária</span>
        </p>

        <div className='card__links'>
          {fromDate && toDate && (
            <Link
              to={`booking/${room._id}/${fromDate}/${toDate}`}
              className='card__links--link'
            >
              Book room
            </Link>
          )}
          <button className='card__links--button' onClick={handleModal}>
            View details <IoInformationCircleOutline size={18} />
          </button>
        </div>
      </div>

      {modal && (
        <HomeModal
          handleCloseModal={handleCloseModal}
          handleModalOutsideClick={handleModalOutsideClick}
          name={room.name}
          description={room.description}
          images={room.imageurls}
          price={room.rentproperty}
        />
      )}
    </>
  );
}
