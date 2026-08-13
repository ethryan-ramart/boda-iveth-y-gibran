import { motion } from 'framer-motion'

const GiftRegistrySection = () => {
  const handleAmazonClick = () => {
    window.open('https://www.amazon.com.mx/wedding/share/Boda-Alitzel-y-Leonel', '_blank')
  }

  const handlePayPalClick = () => {
    window.open('https://www.paypal.com/paypalme/LeonelRamart', '_blank')
  }

  return (
    <section className="gift-registry-section">
      <div className="gift-registry-content">
        <motion.h2
          className="gift-registry-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Mesa de Regalos
        </motion.h2>

        <motion.p
          className="gift-registry-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
            Tu presencia es lo más importante para nosotros <br />
            Pero si igual quieres lucirte...
        </motion.p>

        <div className="gift-registry-cards-container">
          <motion.div
            className="gift-registry-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="gift-card-icon">🎁</div>
            <h3 className="gift-card-title">Amazon</h3>
            <p className="gift-card-text">
              Visita nuestra mesa de regalos en Amazon
            </p>
            
            <motion.button
              className="gift-button amazon-button"
              onClick={handleAmazonClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-icon">🛒</span>
              Ver Mesa de Regalos
            </motion.button>
          </motion.div>

          <motion.div
            className="gift-registry-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="gift-card-icon">💳</div>
            <h3 className="gift-card-title">PayPal</h3>
            <p className="gift-card-text">
              O si prefieres, puedes apoyarnos en nuestra luna de miel
            </p>
            
            <motion.button
              className="gift-button paypal-button"
              onClick={handlePayPalClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-icon">💰</span>
              Enviar Transferencia
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GiftRegistrySection

