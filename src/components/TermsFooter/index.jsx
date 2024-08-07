import './index.scss';

export default function TermsFooter() {
  return (
    <footer className='termsfooter'>
      <p>
        Ao clicar em continuar, você confirma que leu e aceita os nossos{' '}
        <a href='#' className='termsfooter__link'>
          Termos e condições
        </a>{' '}
        e a nossa{' '}
        <a href='#' className='termsfooter__link'>
          Declaração de Privacidade
        </a>
        , e os{' '}
        <a href='#' className='termsfooter__link'>
          Termos e condições{' '}
        </a>
        do BookingRoom.com.
      </p>
    </footer>
  );
}
