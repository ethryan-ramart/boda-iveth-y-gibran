import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Fecha de la boda en hora de México (UTC-6)
    const weddingDate = new Date('2026-10-24T16:30:00-06:00').getTime()
    
    const updateCountdown = () => {
      // Obtener la hora actual en UTC y convertir a hora de México
      const now = new Date().getTime()
      const distance = weddingDate - now
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }
    
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const createConfetti = () => {
    const defaults = {
      startVelocity: 45,
      ticks: 80,
      zIndex: 1000,
      colors: ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#FFA500', '#FF1493']
    }

    confetti({
      ...defaults,
      particleCount: 150,
      origin: { x: 0.1, y: 0.9 },
      angle: 60,
      spread: 70
    })

    confetti({
      ...defaults,
      particleCount: 150,
      origin: { x: 0.9, y: 0.9 },
      angle: 120,
      spread: 70
    })
  }

  return (
    <section className="invitation-section">
      <div className="invitation-content">
        <motion.p 
          className="invitation-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Acompañanos este
        </motion.p>
        
        <motion.h2 
          className="wedding-date"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          24 de Octubre 2026
        </motion.h2>
        
        <motion.div 
          className="countdown-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          onAnimationComplete={() => {
            if (!animationComplete) {
              setAnimationComplete(true)
              setTimeout(() => createConfetti(), 200)
            }
          }}
        >
          <motion.div 
            className="countdown-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Días</div>
          </motion.div>
          
          <motion.div 
            className="countdown-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Horas</div>
          </motion.div>
          
          <motion.div 
            className="countdown-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutos</div>
          </motion.div>
          
          <motion.div 
            className="countdown-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Segundos</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CountdownSection

