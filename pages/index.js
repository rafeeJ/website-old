import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeadTop from '../components/HeadTop'
import Image from 'next/image'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Hero className="flex-grow" />
    </Layout>
  )
}
