import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FloatingMenu.css'

interface MenuItem {
  id: string
  label: string
  icon: string
}

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { id: 'hero', label: 'Inicio', icon: '🏠' },
    { id: 'parents', label: 'Compañia', icon: '💖' },
    { id: 'polaroid', label: 'Fotos', icon: '📸' },
    { id: 'countdown', label: '¡Guarda la fecha!', icon: '⏰' },
    { id: 'venues', label: 'Lugares del evento', icon: '📍' },
    { id: 'itinerary', label: 'Itinerario', icon: '📅' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="floating-menu-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-items"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                className="menu-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`floating-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.div>
      </motion.button>
    </div>
  )
}

export default FloatingMenu