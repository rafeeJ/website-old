import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <div className={styles.container}>
     

      <Subscribe />

      <footer className={styles.footer}>
          2021 Jenkins Company
      </footer>
    </div>
  )
}
