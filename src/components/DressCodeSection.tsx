import { motion } from 'framer-motion'

const DressCodeSection = () => {
  const colors = [
    { name: 'Rosa ', hex: '#9b3c5e' },
    { name: 'Rosa Palo', hex: '#ba8074' },
    { name: 'Verde Olivo', hex: '#837131' },
    { name: 'Terracota', hex: '#71443f' },
    { name: 'Dorado Claro', hex: '#d6924b' },
    { name: 'Vino', hex: '#6B2C3E' }
  ]

  return (
    <section className="dress-code-section">
      <div className="dress-code-content">
        <motion.h2
          className="dress-code-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Dress Code
          
        </motion.h2>
        <motion.h3
          className="dress-code-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Elegante
          
        </motion.h3>

        <motion.p
          className="dress-code-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          Colores sugeridos para armonizar la celebración. Lo más importante es que te sientas tú.
        </motion.p>

        <motion.div
          className="dress-code-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          {colors.map((color, index) => (
            <motion.div
              key={color.hex}
              className="color-swatch"
              style={{ backgroundColor: color.hex }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + (index * 0.1),
                ease: 'easeOut' 
              }}
              whileHover={{ scale: 1.05 }}
              title={color.name}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DressCodeSection
