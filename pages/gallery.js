import styles from '../styles/Home.module.css'
import galleryData from '../lib/gallery-data'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div className={styles.gallery_container}>
      {galleryData.slice(0,2).map((gallery, index) => (
        <div key={"gallery_" + index}>
          <h5>{gallery.date}</h5>
          <h2>{gallery.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: gallery.description }}></div>
          <div className={styles.gallery_div}>
            {gallery.filenames.map(filename => {
              const src = `/photos/${filename}`
              return (
                <a className={styles.gallery_image} key={filename} target="_blank" href={src}>
                  <Image
                    alt={filename}
                    src={src}
                    layout="fill"
                    objectFit="contain"
                  />
                  {/* <img
                    src={src}
                    alt={filename}
                    loading="lazy"
                  /> */}
                </a>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
