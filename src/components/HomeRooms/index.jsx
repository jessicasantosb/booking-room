import { IoInformationCircleOutline } from 'react-icons/io5';
import './index.scss';

export default function HomeRooms({ images, name, type, maxcount }) {
  return (
    <div className='card'>
      <div className='card__slider'>
        {images.map((image, index) => {
          return <img key={index} src={image} alt={name} className='image' />;
        })}
      </div>
      <p className='card__type'>{type}</p>
      <div>
        <h3 className='card__name'>{name}</h3>
        <div className='card__content'>
          <p className='card__content--maxcount'>
            Max count: <span>{maxcount}</span>
          </p>
          <button className='card__content--button'>
            view details <IoInformationCircleOutline size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
