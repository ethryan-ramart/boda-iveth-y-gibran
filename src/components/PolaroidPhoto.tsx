import { useState } from 'react'
import './PolaroidPhoto.css'

interface PolaroidPhotoProps {
  imageUrl: string
  altText?: string
  caption?: string
}

function PolaroidPhoto({ imageUrl, altText = 'Photo', caption }: PolaroidPhotoProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="polaroid-container">
      <div className="polaroid-frame" style={{ opacity: imageLoaded ? 1 : 0 }}>
        <div className="polaroid-image">
          <img
            src={imageUrl}
            alt={altText}
            loading="eager"
            decoding="sync"
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </div>
        {caption && <div className="polaroid-caption">{caption}</div>}
      </div>
    </div>
  )
}

export default PolaroidPhoto