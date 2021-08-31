import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        SewThis
      </header>

      <Subscribe />

      <footer className={styles.footer}>
          2021 Jenkins Company
      </footer>
    </div>
  )
}
