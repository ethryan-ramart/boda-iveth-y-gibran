import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useImages } from '../contexts/ImageContext'
import PolaroidPhoto from './PolaroidPhoto'

interface Photo {
  imageUrl: string
  caption: string
}

const PHOTOS: Photo[] = [
  { imageUrl: '/images/polaroids/2.jpeg', caption: '"Eres tu la historia' },
  { imageUrl: '/images/polaroids/3.jpeg', caption: 'mas bonita' },
  { imageUrl: '/images/polaroids/1.jpeg', caption: 'que Dios escribio' },
  { imageUrl: '/images/polaroids/4.jpeg', caption: 'en mi vida"' },
]

const PolaroidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { images } = useImages()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  return (
    <>
      <div ref={sectionRef} style={{ height: '500vh', position: 'relative' }}>
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            overflow: 'visible'
          }}
        >
          <h2 className="love-story-title" style={{ marginBottom: '2rem' }}>
            Nuestro Amor
          </h2>
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '3rem'
          }}>
            {PHOTOS.map((photo, index) => {
              const totalPhotos = PHOTOS.length
              
              // La primera foto (index 0) aparece inmediatamente sin animación
              // Las demás fotos (index 1-4) se distribuyen en el scroll
              const isFirstPhoto = index === 0
              
              // Para las fotos 1-4, distribuirlas en el 70% del scroll
              const photoStart = isFirstPhoto ? 0 : ((index - 1) / (totalPhotos - 1)) * 0.7
              const photoEnd = isFirstPhoto ? 0 : photoStart + (0.7 / (totalPhotos - 1))
              
              // Transformaciones
              const y = useTransform(
                scrollYProgress,
                [photoStart, photoEnd],
                isFirstPhoto ? [0, 0] : [500, 0]
              )
              
              const scale = useTransform(
                scrollYProgress,
                [photoStart, photoEnd],
                isFirstPhoto ? [1, 1] : [0.8, 1]
              )
              
              // Rotación
              const baseRotate = index % 2 === 0 ? -8 : 8
              const rotate = baseRotate + (index * 3) - (totalPhotos * 1.5)

              // Solo renderizar si la imagen está cargada
              if (!images[photo.imageUrl]) return null

              return (
                <motion.div
                  key={index}
                  style={{
                    position: 'absolute',
                    y,
                    scale,
                    rotate,
                    zIndex: index,
                    cursor: 'pointer',
                    willChange: 'transform'
                  }}
                  onClick={() => setSelectedImage(photo.imageUrl)}
                  initial={{ opacity: isFirstPhoto ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: isFirstPhoto ? 0 : 0 }}
                >
                  <PolaroidPhoto
                    imageUrl={images[photo.imageUrl]}
                    caption={photo.caption}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default PolaroidSection

