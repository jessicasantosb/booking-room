import './index.scss';

export default function Footer() {
  return (
    <footer className='footer container'>
      <div className='footer__content'>
        <h3 className='footer__logo'>
          BookingRoom.com - Aproveite experiências únicas e inesquecíveis!
        </h3>

        <div className='footer__links'>
          <div className='footer__links--div'>
            <a href='#'>Termos e condições de uso</a>
            <a href='#'>Política de privacidade</a>
            <a href='#'>Política de hospedagem</a>
          </div>
          <div className='footer__links--div'>
            <a href='#'>Nossa história</a>
            <a href='#'>Trabalhe conosco</a>
            <a href='#'>Sala de imprensa</a>
            <a href='#'>Anuncie conosco</a>
          </div>
          <div className='footer__links--div'>
            <a href='#'>Suas reservas</a>
            <a href='#'>Perguntas frequentes</a>
            <a href='#'>Fale conosco</a>
            <a href='#'>Avaliar uma acomodação</a>
          </div>
        </div>

        <p className='footer__copyright'>
          &copy; 2024 - Alguns direitos reservados
        </p>
      </div>
    </footer>
  );
}
