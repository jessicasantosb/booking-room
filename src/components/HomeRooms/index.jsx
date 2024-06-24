import { useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import HomeModal from '../HomeModal';
import './index.scss';
export default function HomeRooms({ room }) {
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
        <div className='card__slider'>
          {room.imageurls.map((url, index) => {
            return (
              <img key={index} src={url} alt={room.name} className='image' />
            );
          })}
        </div>
        <p className='card__type'>{room.type}</p>
        <h3 className='card__name'>{room.name}</h3>

        <p className='card__maxcount'>
          Max count: <span>{room.maxcount}</span>
        </p>
        <p className='card__phonenumber'>
          Phone number: <span>{room.phonenumber}</span>
        </p>

        <div className='card__links'>
          <Link
            to={`booking/${room._id}`}
            className='button card__links--link'
          >
            Book room
          </Link>
          <button
            className='button card__links--button'
            onClick={handleModal}
          >
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
        />
      )}
    </>
  );
}
