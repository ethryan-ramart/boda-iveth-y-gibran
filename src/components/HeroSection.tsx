import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
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
    <div className="scroll-container">
      <div className="main-section">
        <div ref={imageRef} className="main-image">
          <img src="/images/portada.jpeg" alt="Invitación de Boda" />
          <div ref={overlayRef} className="image-overlay">
            <h1>Iveth y Gibran</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

