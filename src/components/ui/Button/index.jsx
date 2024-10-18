import BeatLoader from 'react-spinners/BeatLoader';
import './index.scss';

export default function Button({ text, type, onClick, loading }) {
  return (
    <button
      className={`button ${loading && 'button--disable'}`}
      type={type}
      onClick={onClick}
    >
      {text}{' '}
      {loading && (
        <BeatLoader
          color='#191e3b'
          size={2}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      )}
    </button>
  );
}
