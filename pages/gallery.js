import styles from '../styles/Home.module.css'
import galleryData from '../lib/gallery-data'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div className={styles.gallery_container}>
      {galleryData.map((gallery, galleryIndex) => (
        <div key={"gallery_" + galleryIndex}>
          <h5>{gallery.date}</h5>
          <h2>{gallery.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: gallery.description }}></div>
          <div className={styles.gallery_div}>
            {gallery.importedImages.map((image, imageIndex) => {
              const orientation = image.width > image.height ? 'landscape' : 'portrait'
              return (
                <a 
                  target="_blank" 
                  className={`
                    ${styles.gallery_image} 
                    ${orientation === 'portrait' ?  styles.gallery_image_portrait : ''}
                  `}
                  key={`g${galleryIndex}i${imageIndex}`} 
                  href={image.src}
                >
                  <Image
                    placeholder='blur'
                    alt={image.src}
                    src={image}
                    objectFit={orientation === 'landscape' ? 'contain' : null}
                    layout={orientation === 'landscape' ? 'responsive' : 'fill'}
                  />
                </a>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
