import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './MusicControl.css'

interface MusicControlProps {
  audioRef: React.RefObject<HTMLAudioElement | null>
  onMusicStateChange: (isPlaying: boolean) => void
}

const MusicControl = ({ audioRef, onMusicStateChange }: MusicControlProps) => {
  const [isPlaying, setIsPlaying] = useState(() => {
    // Leer el estado inicial del localStorage, por defecto true
    const savedState = localStorage.getItem('musicEnabled')
    return savedState === null ? true : savedState === 'true'
  })

  useEffect(() => {
    // Notificar al componente padre sobre el estado inicial
    onMusicStateChange(isPlaying)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      const newState = !isPlaying
      
      if (newState) {
        audioRef.current.play().catch(error => {
          console.log('Error al reproducir música:', error)
        })
      } else {
        audioRef.current.pause()
      }
      
      setIsPlaying(newState)
      localStorage.setItem('musicEnabled', String(newState))
      onMusicStateChange(newState)
    }
  }

  return (
    <motion.button
      className="music-control-button"
      onClick={toggleMusic}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="music-icon"
      >
        {isPlaying ? (
          // Icono de nota musical (reproduciendo)
          <>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </>
        ) : (
          // Icono de mute/silencio (pausado)
          <>
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </>
        )}
      </svg>
    </motion.button>
  )
}

export default MusicControl

