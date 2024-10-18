import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import './index.scss';

export default function HomeModal({
  handleCloseModal,
  handleModalOutsideClick,
  name,
  price,
  images,
  description,
}) {
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState(0);

  const contentRef = useRef();

  const prevSlide = () => {
    if (active > 0) setActive(active - 1);
  };

  const nextSlide = () => {
    if (active < images.length - 1) setActive(active + 1);
  };

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  return (
    <div className='modal homemodal' onClick={handleModalOutsideClick}>
      <div className='modal__content homemodal__content'>
        <button className='modal__button' onClick={handleCloseModal}>
          <IoClose size={24} />
        </button>

        <h2 className='homemodal__title'>{name}</h2>
        <h3 className='homemodal__price'>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          <span>por diária</span>
        </h3>
        <div
          ref={contentRef}
          style={{ transform: `translateX(${position}px)` }}
          className='homemodal__slide'
        >
          {images.map((url, index) => {
            return (
              <img
                key={index}
                src={url}
                alt={name}
                className='homemodal__image'
              />
            );
          })}
        </div>
        <nav className='homemodal__nav'>
          <button className='homemodal__nav--button' onClick={prevSlide}>
            <IoIosArrowBack size={32} />
          </button>
          <button className='homemodal__nav--button' onClick={nextSlide}>
            <IoIosArrowForward size={32} />
          </button>
        </nav>
        <p className='homemodal__description'>{description}</p>
      </div>
    </div>
  );
}
