import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div class="flex flex-col flex-wrap">
     <Header />
     <Hero class="flex-shrink"/>
      <footer class="justify-items-center" className={styles.footer}>
        <h1 class="font-serif text-center">2021 Jenkins Company</h1>
      </footer>
    </div>
  )
}
