import { motion } from 'framer-motion'

const ItinerarySection = () => {
  const ChurchIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      {/* Cruz superior */}
      <rect x="11" y="2" width="2" height="3" fill="currentColor" />
      <rect x="9.5" y="3.5" width="5" height="2" fill="currentColor" />
      
      {/* Torre central con techo triangular */}
      <path d="M10 6 L12 4 L14 6 L14 8 L10 8 Z" fill="currentColor" />
      
      {/* Cuerpo principal de la iglesia */}
      <rect x="9" y="8" width="6" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Ventana superior torre */}
      <path d="M11 10 Q12 9 13 10 L13 12 L11 12 Z" fill="currentColor" />
      
      {/* Puerta principal (arco) */}
      <path d="M10.5 14 Q12 12.5 13.5 14 L13.5 19 L10.5 19 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Alas laterales */}
      {/* Ala izquierda */}
      <path d="M5 12 L9 10 L9 19 L5 19 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 14 Q6.5 13.5 7 14 L7 16 L6 16 Z" fill="currentColor" />
      
      {/* Ala derecha */}
      <path d="M19 12 L15 10 L15 19 L19 19 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 14 Q17.5 13.5 18 14 L18 16 L17 16 Z" fill="currentColor" />
      
      {/* Base */}
      <rect x="4" y="19" width="16" height="1" fill="currentColor" />
    </svg>
  )

  const GlassIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3L8 13C8 16 9.5 18 12 18C14.5 18 16 16 16 13L18 3M5 3L19 3M12 18L12 21M9 21L15 21" />
    </svg>
  )

  const DanceIcon = () => (
    <img
      src="/images/iconos/bola disco.png"
      alt="Bola disco"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        filter: 'brightness(0) saturate(100%) invert(30%)'
      }}
    />
  )

  const DinnerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Vapor */}
      <path d="M17 3C17 3 17 5 18.5 6.5C20 8 20 10 20 10" />
      <path d="M19 2C19 2 19 4 20.5 5.5C22 7 22 9 22 9" />
      <path d="M15 4C15 4 15 6 16.5 7.5C18 9 18 11 18 11" />
      {/* Campana/Cloche */}
      <path d="M3 14C3 9 7 6 12 6C17 6 21 9 21 14" />
      {/* Manija superior */}
      <ellipse cx="12" cy="5" rx="2" ry="0.8" />
      <line x1="12" y1="5" x2="12" y2="6" />
      {/* Base/Plato */}
      <path d="M2 14L22 14" strokeWidth="2" />
      <path d="M3 14C3 14 3 16 5 17L19 17C21 16 21 14 21 14" />
    </svg>
  )

  const events = [
    {
      icon: <ChurchIcon />,
      time: '4:30 p.m.',
      title: 'Ceremonia',
      description: 'Inicia la ceremonia religiosa'
    },
    {
      icon: <GlassIcon />,
      time: '6:00 p.m.',
      title: 'Recepción',
      description: 'Brindis de bienvenida'
    },
    {
      icon: <DinnerIcon />,
      time: '7:30 p.m.',
      title: 'Cena',
      description: 'Disfruta de una deliciosa cena'
    },
    {
      icon: <DanceIcon />,
      time: '9:00 p.m.',
      title: 'Baile',
      description: 'Inicia la fiesta y diversión'
    },
  ]

  return (
    <section className="itinerary-section">
      <div className="itinerary-content">
        <motion.h2
          className="itinerary-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Itinerario
        </motion.h2>

        <motion.div
          className="itinerary-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (index * 0.15),
                ease: 'easeOut' 
              }}
            >
              <div className="timeline-icon">
                <div className="icon-svg">{event.icon}</div>
              </div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3 className="timeline-time">{event.time}</h3>
                <h4 className="timeline-title">{event.title}</h4>
                <p className="timeline-description">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ItinerarySection

