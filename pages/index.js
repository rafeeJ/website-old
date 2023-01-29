import { logEvent } from 'firebase/analytics'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { analytics } from '../firebase/clientApp'
import { Card } from '@mui/material'
import HomePageCopy from '../components/HomePageCopy'

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
        <span className='text-2xl sm:text-4xl font-merri'>home</span>
      </div>
      <Card className='flex items-center flex-col md:flex-row p-4 mb-2'>
        <div className="m-8 order-first" role="img">
          <Image src={me} alt={'Another picture of Rafee...'} />
        </div>
        <HomePageCopy />
      </Card>
    </Layout>
  );
}
