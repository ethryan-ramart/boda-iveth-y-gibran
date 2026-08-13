import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

interface Hotel {
  name: string
  address: string
  distance: string
  mapsUrl: string
  phone?: string
  rating: number
}

const HotelsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const hotels: Hotel[] = [
    {
      name: 'Hotel Gralta',
      address: 'Pbro. José Guadalupe González 17',
      distance: '1.9 km del salón',
      phone: '+52 431 688 0644',
      mapsUrl: 'https://maps.app.goo.gl/d4JfM5E3ScgUPeJP6',
      rating: 4.5
    },
    {
      name: 'Hotel Mado',
      address: 'Ramón Corona 31A',
      distance: '1.6 km del salón',
      phone: '+52 431 113 2072',
      mapsUrl: 'https://maps.app.goo.gl/eSQEvYi2UoX3g3MRA',
      rating: 4.0
    },
    {
      name: 'Hotel Sergio`s',
      address: 'Ramón Corona 20',
      distance: '1.8 km del salón',
      phone: '+52 431 746 0606',
      mapsUrl: 'https://maps.app.goo.gl/rLcoC3wt7FbeVSH86',
      rating: 4.1
    },
    {
      name: 'Hotel Los Altos',
      address: 'Pbro. José Guadalupe González 2A',
      distance: '2 km del salón',
      phone: '+52 431 108 2713',
      mapsUrl: 'https://maps.app.goo.gl/2V447pxDi497icet8',
      rating: 3.4
    },
    {
      name: 'Hotel Camelot',
      address: 'Lago del Sol 53',
      distance: '2.9 km del salón',
      phone: '+52 431 746 0553',
      mapsUrl: 'https://maps.app.goo.gl/HUeVmgEoX5NdXZ7F8',
      rating: 4.1
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % hotels.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + hotels.length) % hotels.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star full-star">★</span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half-star">★</span>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty-star">★</span>
      )
    }

    return stars
  }

  return (
    <section className="hotels-section">
      <div className="hotels-content">
        <motion.h2
          className="hotels-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hoteles Cercanos
        </motion.h2>

        {/* <motion.p
          className="hotels-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          Opciones de hospedaje en Jalostotitlán, Jalisco
        </motion.p> */}

        <motion.div
          className="hotels-carousel-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <button 
            className="carousel-button carousel-button-prev" 
            onClick={prevSlide}
            aria-label="Hotel anterior"
          >
            ‹
          </button>

          <div
            className="hotels-carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="hotels-carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {hotels.map((hotel, index) => (
                <div key={index} className="hotel-card">
                  <div className="hotel-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 10L3 21L21 21L21 10M12 3L12 7M8 7L16 7M8 7L8 21M16 7L16 21M5 14L7 14M5 17L7 17M10 14L12 14M10 17L12 17M14 14L16 14M14 17L16 17M17 14L19 14M17 17L19 17" />
                    </svg>
                  </div>
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <div className="hotel-rating">
                    {renderStars(hotel.rating)}
                    <span className="rating-number">{hotel.rating}</span>
                  </div>
                  <p className="hotel-address">{hotel.address}</p>
                  <p className="hotel-distance">{hotel.distance}</p>
                  {hotel.phone && (
                    <p className="hotel-phone">
                      <span className="phone-icon">📞</span> {hotel.phone}
                    </p>
                  )}
                  <a
                    href={hotel.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hotel-maps-button"
                  >
                    <svg viewBox="0 0 100 100" className="maps-icon-svg">
                      <rect x="10" y="20" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="3" rx="4"/>
                      <path d="M 30 20 L 30 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
                      <path d="M 50 20 L 50 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
                      <path d="M 70 20 L 70 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
                      <circle cx="60" cy="35" r="8" fill="#FF6B6B"/>
                      <path d="M 60 43 L 60 50" stroke="#FF6B6B" strokeWidth="2"/>
                      <circle cx="60" cy="35" r="3" fill="white"/>
                    </svg>
                    Ver en Google Maps
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-button carousel-button-next" 
            onClick={nextSlide}
            aria-label="Siguiente hotel"
          >
            ›
          </button>
        </motion.div>

        <div className="carousel-dots">
          {hotels.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al hotel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HotelsSection
