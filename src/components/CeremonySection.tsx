import { motion } from 'framer-motion'

const CeremonySection = () => {
  const handleMapClick = () => {
    // Coordenadas de la Catedral de Palma
    window.open('https://maps.app.goo.gl/dBnreEF21dUdH14j9', '_blank')
  }

  return (
    <section className="ceremony-section">
      <div className="ceremony-content">
        <motion.h2 
          className="ceremony-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Ceremonia
        </motion.h2>
        
        <motion.h3 
          className="ceremony-name"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          Parroquia de Nuestra Señora de la Asunción
        </motion.h3>
        
        <motion.div
          className="ceremony-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <img
            src="/images/parroquia.jpg"
            alt="Parroquia de Nuestra Señora de la Asunción"
            className="ceremony-image"
          />
        </motion.div>
        
        <motion.div 
          className="ceremony-address"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          Pbro. Alejandro Villalobos 19 Centro, 47120 Jalostotitlán, Jal.
        </motion.div>
        
        <motion.div 
          className="ceremony-time"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        >
          4:30 pm
        </motion.div>
        
        <motion.div 
          className="ceremony-map-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          onClick={handleMapClick}
        >
          <div className="map-icon">
            <svg viewBox="0 0 100 100" className="map-svg">
              <rect x="10" y="20" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="3" rx="4"/>
              <path d="M 30 20 L 30 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M 50 20 L 50 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M 70 20 L 70 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
              <circle cx="60" cy="35" r="8" fill="#FF6B6B"/>
              <path d="M 60 43 L 60 50" stroke="#FF6B6B" strokeWidth="2"/>
              <circle cx="60" cy="35" r="3" fill="white"/>
            </svg>
          </div>
          <p className="map-text">(Pulsa para ver en Maps)</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CeremonySection
