import { useState, useEffect, useRef } from 'react'
import './App.css'
import { useImages } from './contexts/ImageContext'
import EnvelopeIntro from './components/EnvelopeIntro'
import MusicControl from './components/MusicControl'
import HeroSection from './components/HeroSection'
import InvitationText from './components/InvitationText'
import ParentsSection from './components/ParentsSection'
import PolaroidSection from './components/PolaroidSection'
import CountdownSection from './components/CountdownSection'
import CeremonySection from './components/CeremonySection'
import SalonSection from './components/SalonSection'
import ItinerarySection from './components/ItinerarySection'
import FloatingMenu from './components/FloatingMenu'
import FinalSection from './components/FinalSection'

type HeartParticle = {
  id: number
  x: number
  y: number
  size: number
  driftX: number
  duration: number
  delay: number
}

function App() {
  const { isLoading: imagesLoading } = useImages()
  const [hearts, setHearts] = useState<HeartParticle[]>([])
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!imagesLoading) {
      // Pequeño delay para asegurar que las imágenes estén listas
      setTimeout(() => {}, 100)
    }
  }, [imagesLoading])

  useEffect(() => {
    const createHearts = (x: number, y: number) => {
      const burst = Array.from({ length: 6 }, (_, index) => ({
        id: Date.now() + Math.random() + index,
        x,
        y,
        size: 10 + Math.random() * 10,
        driftX: (Math.random() - 0.5) * 80,
        duration: 900 + Math.random() * 500,
        delay: index * 40,
      }))

      setHearts((current) => [...current, ...burst])

      const maxDuration = Math.max(...burst.map((heart) => heart.duration + heart.delay))
      window.setTimeout(() => {
        const burstIds = new Set(burst.map((heart) => heart.id))
        setHearts((current) => current.filter((heart) => !burstIds.has(heart.id)))
      }, maxDuration + 100)
    }

    const handlePointerDown = (event: PointerEvent) => {
      createHearts(event.clientX, event.clientY)
    }

    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  const handleEnvelopeComplete = () => {
    setShowEnvelope(false)
    setShowContent(true)
    
    // Reproducir música solo si está habilitada en localStorage
    const musicEnabled = localStorage.getItem('musicEnabled')
    const shouldPlay = musicEnabled === null ? true : musicEnabled === 'true'
    
    if (audioRef.current && shouldPlay) {
      audioRef.current.play().catch(error => {
        console.log('Error al reproducir música:', error)
      })
    }
  }

  const handleMusicStateChange = (isPlaying: boolean) => {
    // Este callback se usa para sincronizar el estado si es necesario
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Error al reproducir música:', error)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }

  // Pausar música cuando el usuario cambia de tab o aplicación
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (audioRef.current) {
        if (document.hidden) {
          // La página está oculta (cambió de tab o aplicación)
          audioRef.current.pause()
        } else {
          // La página está visible de nuevo
          // Solo reanudar si la música estaba habilitada
          const musicEnabled = localStorage.getItem('musicEnabled')
          const shouldPlay = musicEnabled === null ? true : musicEnabled === 'true'
          
          if (shouldPlay) {
            audioRef.current.play().catch(error => {
              console.log('Error al reanudar música:', error)
            })
          }
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  if (imagesLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p>Cargando invitación...</p>
          <div className="loading-bar">
            <div
              className="loading-progress"
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="/music/Hallelujah.mp3" type="audio/mpeg" />
      </audio>

      {/* Envelope intro */}
      {showEnvelope && <EnvelopeIntro onOpen={handleEnvelopeComplete} />}

      {/* Music control button */}
      {showContent && (
        <MusicControl
          audioRef={audioRef}
          onMusicStateChange={handleMusicStateChange}
        />
      )}

      {/* Main content */}
      {showContent && (
        <div className="app">
      <div className="heart-click-layer" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart-particle"
            style={
              {
                left: `${heart.x}px`,
                top: `${heart.y}px`,
                width: `${heart.size}px`,
                height: `${heart.size}px`,
                '--drift-x': `${heart.driftX}px`,
                '--duration': `${heart.duration}ms`,
                '--delay': `${heart.delay}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="invitation">
        <InvitationText />
      </div>
      <div id="parents">
        <ParentsSection />
      </div>
      <div id="polaroid">
        <PolaroidSection />
      </div>
      <div id="countdown">
        <CountdownSection />
      </div>
      <div id="venues">
        <CeremonySection />
        <SalonSection />
      </div>
      <div id="itinerary">
        <ItinerarySection />
      </div>
      {/* <div id="dresscode">
        <DressCodeSection />
      </div> */}
      {/* <div id="hotels">
        <HotelsSection />
      </div> */}
      {/* <div id="confirmation">
        <ConfirmationSection />
      </div>
      <div id="gifts">
        <GiftRegistrySection />
      </div> */}
      <div id="hero">
        <FinalSection />
      </div>
          <FloatingMenu />
        </div>
      )}
    </>
  )
}

export default App

