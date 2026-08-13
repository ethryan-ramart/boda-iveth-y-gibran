import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface ImageContextType {
  images: Record<string, string>
  isLoading: boolean
}

const ImageContext = createContext<ImageContextType | undefined>(undefined)

export const useImages = () => {
  const context = useContext(ImageContext)
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider')
  }
  return context
}

interface ImageProviderProps {
  children: ReactNode
}

export const ImageProvider = ({ children }: ImageProviderProps) => {
  const [images, setImages] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const imageUrls = [
      '/images/portada.jpeg',
      '/images/polaroids/1.jpeg',
      '/images/polaroids/2.jpeg',
      '/images/polaroids/3.jpeg',
      '/images/polaroids/4.jpeg',
      '/images/polaroids/5.jpeg'
    ]

    let loadedCount = 0
    const loadedImages: Record<string, string> = {}

    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
      
      img.onload = () => {
        loadedImages[url] = url
        loadedCount++
        
        if (loadedCount === imageUrls.length) {
          setImages(loadedImages)
          setIsLoading(false)
        }
      }
      
      img.onerror = () => {
        // Si hay error, continuar de todas formas
        loadedImages[url] = url
        loadedCount++
        
        if (loadedCount === imageUrls.length) {
          setImages(loadedImages)
          setIsLoading(false)
        }
      }
    })
  }, [])

  return (
    <ImageContext.Provider value={{ images, isLoading }}>
      {children}
    </ImageContext.Provider>
  )
}

