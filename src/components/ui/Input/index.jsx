import { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import './index.scss';

export default function Input({ type, placeholder, name, value, onChange, error }) {
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
        />
        {isPassword && (
          <button
            className='input__icon'
            type='button'
            onClick={handleHideText}
            tabIndex='-1'
          >
            {slashEye ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        )}
      </div>

      {error && <p className='input__error'>{error}</p>}
    </>
  );
}
