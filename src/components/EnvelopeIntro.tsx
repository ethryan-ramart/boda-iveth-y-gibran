import './EnvelopeIntro.css';

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export default function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const handleClick = () => {
    const intro = document.querySelector('.envelope-intro');
    intro?.classList.add('opening');
    setTimeout(onOpen, 2000);
  };

  return (
    <div className="envelope-intro" onClick={handleClick}>
      {/* Imagen de fondo del Hero */}
      <div className="hero-background">
        <img src="/images/portada.jpeg" alt="Invitación de Boda" />
      </div>

      {/* Capa de blur encima */}
      <div className="blur-overlay"></div>

      {/* Iniciales centrales I & G */}
      <div className="central-text">
        <span className="initials">I &amp; G</span>
      </div>

      {/* Texto de instrucción */}
      <p className="tap-instruction">Toca para abrir</p>
    </div>
  );
}
