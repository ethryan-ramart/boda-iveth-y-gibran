import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FinalSection = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const image = imageRef.current
    const overlay = overlayRef.current

    if (image && overlay) {
      // Animación inicial de la imagen
      gsap.fromTo(
        image,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
      )

      // Animación del overlay
      gsap.fromTo(
        overlay,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
      )
    }
  }, [])

  return (
    <div className="fin-scroll-container">
      <div className="fin-section">
        <div ref={imageRef} className="fin-image">
          <img src="/images/Fin.jpeg" alt="Invitación de Boda" />
          <div ref={overlayRef} className="final-text-overlay">
            <h1>¡Nos vemos pronto!</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalSection

