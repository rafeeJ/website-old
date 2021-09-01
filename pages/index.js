import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeadTop from '../components/HeadTop'

export default function Home() {
  return (

    <div className="flex flex-col flex-wrap bg-offwhite">
      <HeadTop />
      <Header />
      <Hero className="flex-grow" />
      <footer className="justify-items-center bg-offwhite flex-grow">
        <h1 className="font-serif text-center m-3">2021 Jenkins Company</h1>
      </footer>
    </div>
  )
}
