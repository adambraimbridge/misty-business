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
            {gallery.filenames.map((filename, imageIndex) => {
              return (
                <a className={styles.gallery_image} key={`g${galleryIndex}i${imageIndex}`} target="_blank" href={filename.src}>
                  <Image
                    alt={filename}
                    src={filename}
                    layout="responsive"
                    placeholder="blur"
                    objectFit="contain"
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
