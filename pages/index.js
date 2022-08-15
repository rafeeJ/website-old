import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import { useEffect } from 'react'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../firebase/clientApp'

export default function Home() {
  const me = require('../public/me.png')

  useEffect(() => {
    logEvent(analytics, 'screen_view', {
      firebase_screen: 'Home'
    })
  }, [])
  

  return (
    <Layout>
      <div className='pb-4'>
        <span className='text-2xl sm:text-4xl font-mono'>home</span>
      </div>
      {/* <Hero className="flex-grow" /> */}
      <Card>
        <div className="m-8 order-first" role="img">
          <Image src={me} alt={'Another picture of Rafee...'} />
        </div>
        <div className='flex flex-col justify-between my-8'>
          <div className='text-lg'>
            <div className=''>
              <h1
                className="text-5xl font-mono tracking-tight text-gray-900 leading-snug"
                role="heading"
                aria-level="1"
              >
                Hi, I&apos;m Rafee.
              </h1>
              <p className="mt-2 text-gray-600 text-3xl font-mono" aria-level="2">
                I am a computer science graduate working as a (graduate) software engineer at Lloyds Banking Group.
              </p>

              <p className="mt-4 text-gray-600 text-xl font-mono" aria-level="2">
                I am a big fan of tech, namely: React, React-Native, GoLang, and Python.
              </p>
              <p className="mt-4 text-gray-600 text-xl font-mono" aria-level="2">
                You can read about some of my past and current projects over on the <Link href={'/projects'}><a className='font-extrabold underline text-darkp'>projects</a></Link> page.      
              </p>
              <p className="mt-4 text-gray-600 text-xl font-mono" aria-level="2">
                  If you would like to get in touch, just tap the link in the footer! 
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  )
}
