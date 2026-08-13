import { motion } from 'framer-motion'

const InvitationText = () => {
  return (
    <div className="invitation-section">
      <div className="invitation-content">
        <motion.p 
          className="invitation-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          "Somos el uno para el otro... <br />
          <span className='span-invitation-text'>Ambos para Dios</span>"
          
        </motion.p>
      </div>
    </div>
  )
}

export default InvitationText

