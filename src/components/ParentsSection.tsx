import { motion } from 'framer-motion'

const ParentsSection = () => {
  return (
    <section className="parents-section">
      <div className="parents-content">
        <motion.h2
          className="parents-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Con la bendición de nuestros Padres
        </motion.h2>

        {/* Padres */}
        <motion.div
          className="parents-group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="parents-columns">
            <div className="parents-column">
              <h4 className="parents-side">De la Novia</h4>
              <p className="parents-name">
                <span className="parents-cross" title="En memoria" aria-label="En memoria">
                  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M10.6 2h2.8v5h5v2.8h-5V22h-2.8V9.8h-5V7h5z" />
                  </svg>
                </span>
                Juan Antonio Gonzalez
              </p>
              <p className="parents-name">Maria Elena Gonzalez</p>
            </div>

            <div className="parents-divider" aria-hidden="true" />

            <div className="parents-column">
              <h4 className="parents-side">Del Novio</h4>
              <p className="parents-name">Salvador Padilla</p>
              <p className="parents-name">Maria del Carmen Romo</p>
            </div>
          </div>
        </motion.div>

        {/* Padrinos */}
        <motion.h2
          className="parents-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          En compañia de nuestros Padrinos
        </motion.h2>
        <motion.div
          className="parents-group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
        >
          <div className="parents-columns">
            <div className="parents-column">
              {/* <h4 className="parents-side">De la Novia</h4> */}
              <p className="parents-name">Hugo Antonio Gonzalez</p>
              <p className="parents-name">Sandra Romo</p>
            </div>

            <div className="parents-divider" aria-hidden="true" />

            <div className="parents-column">
              {/* <h4 className="parents-side">Del Novio</h4> */}
              <p className="parents-name">Ernesto Martinez</p>
              <p className="parents-name">Janeth Liliana Padilla</p>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ParentsSection
