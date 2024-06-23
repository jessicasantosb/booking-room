import { IoClose } from 'react-icons/io5';
import './index.scss';
export default function HomeModal({
  handleCloseModal,
  handleModalOutsideClick,
  name,
  images,
  description,
}) {
  return (
    <div className='modal' onClick={handleModalOutsideClick}>
      <div className='modal__content'>
        <button className='modal__button' onClick={handleCloseModal}>
          <IoClose />
        </button>
        <h2 className='modal__title'>{name}</h2>
        <div className='modal_images'>
          {images.map((url, index) => {
            return <img key={index} src={url} alt={name} />;
          })}
        </div>
        <p className='modal__description'>{description}</p>
      </div>
    </div>
  );
}
