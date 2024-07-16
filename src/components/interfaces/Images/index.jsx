import { useState } from 'react';
import './index.scss';

export default function Image(url, alt) {
  const [skeleton, setSkeleton] = useState(true);

  const handleImageLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };
  
  return (
    <div className='wrapper'>
      {skeleton && <div className='wrapper__skeleton'></div>}
      <img
        src={url.src}
        alt={alt}
        className='wrapper__image'
        onLoad={handleImageLoad}
      />
    </div>
  );
}
