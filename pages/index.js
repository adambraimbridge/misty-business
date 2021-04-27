import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Misty Business</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/seamist.jpg" alt="Sea Mist" style={{width:"100%"}} />

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Misty Business
        </h1>

        <p className={styles.description}>
          Welcome aboard the <em>Sea Mist</em>
        </p>

      </main>

      <footer className={styles.footer}>
        <a href="https://twitter.com/seamistress" target="_blank" rel="noopener noreferrer">@seamistress &#x2197;</a> &middot; 
      </footer>

    </div>
  )
}
