import { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import './index.scss';

export default function Input({ type, placeholder, name, value, onChange, onBlur, error }) {
  const [isPassword, setIsPassword] = useState(false);
  const [slashEye, setSlashEye] = useState(true);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (type === 'password') setIsPassword(true);
  }, [type]);

  const handleHideText = () => {
    inputType === 'text' ? setInputType('password') : setInputType('text');
    setSlashEye(!slashEye);
  };

  return (
    <>
      <div className='input'>
        <input
          type={inputType}
          placeholder={placeholder}
          className='input__field'
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {isPassword && (
          <button
            className='input__icon'
            type='button'
            onClick={handleHideText}
          >
            {slashEye ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        )}
      </div>

      {error && <p className='input__error'>{error}</p>}
    </>
  );
}
