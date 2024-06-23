import { useState } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
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
        <div>
          <h3 className='card__name'>{room.name}</h3>
          <div className='card__content'>
            <div>
              <p className='card__content--maxcount'>
                Max count: <span className='italic'>{room.maxcount}</span>
              </p>
              <p className='card__content--phonenumber'>
                Phone number: <span className='italic'>{room.phonenumber}</span>
              </p>
            </div>
            <button className='card__content--button' onClick={handleModal}>
              view details <IoInformationCircleOutline size={18} />
            </button>
          </div>
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
