import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ConfirmationSection = () => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [isSongModalOpen, setIsSongModalOpen] = useState(false)

  const handleConfirm = () => {
    setIsConfirmModalOpen(true)
  }

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false)
  }

  const handleSongRequest = () => {
    setIsSongModalOpen(true)
  }

  const handleCloseSongModal = () => {
    setIsSongModalOpen(false)
  }

  return (
    <section className="confirmation-section">
      <div className="confirmation-content">
        <motion.h2
          className="confirmation-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          ¡Confirma tu asistencia!
        </motion.h2>

        <div className="confirmation-cards-container">
          <motion.div
            className="confirmation-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="confirmation-text">
              Tu presencia es muy importante para nosotros. Por favor, confirma tu asistencia.
            </p>
            
            <motion.button
              className="confirm-button"
              onClick={handleConfirm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-icon">✓</span>
              Confirmar Asistencia
            </motion.button>
          </motion.div>

          <motion.div
            className="song-request-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="song-request-text">
              ¿Te interesaría escuchar alguna canción en la fiesta?
            </p>
            <p className="song-request-subtext">
              ¡Mándanosla!
            </p>
            
            <motion.button
              className="song-button"
              onClick={handleSongRequest}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-icon">📻</span>
              Sugerir Canción
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal de Confirmación */}
      <AnimatePresence>
        {isConfirmModalOpen && (
          <motion.div
            className="confirmation-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseConfirmModal}
          >
            <motion.div
              className="confirmation-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-button" onClick={handleCloseConfirmModal}>
                ✕
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScl1OHDURqfl_Ga8NJP5-yJZoFli32n8iOuKpU9D_WFpaXNMw/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Formulario de confirmación"
              >
                Cargando…
              </iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Canciones */}
      <AnimatePresence>
        {isSongModalOpen && (
          <motion.div
            className="confirmation-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseSongModal}
          >
            <motion.div
              className="confirmation-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-button" onClick={handleCloseSongModal}>
                ✕
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdNsLR1tjIlPjzBkAzyrN4l_ckNcJAcMnrL-NQHCDkudHOqEw/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Formulario de canciones"
              >
                Cargando…
              </iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ConfirmationSection
