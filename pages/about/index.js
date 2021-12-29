import axios from 'axios';
import download from 'downloadjs';
import React from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Image from 'next/image'
import Link from 'next/link'

export default function About(props) {
  const me = require('../../public/me.png')

  async function lol() {
    let api = 'AIzaSyBNEBsNkrtbfsfeTX9Busa7Vfxwd0jqmLY'
    let fileId = '1vc9dFEC2lAJfe0yKKrAzCPP-jTnN_uF7eyFsC3Dn_h0'
    let url = `https://www.googleapis.com/drive/v3/files/${fileId}/export?key=${api}&?mimetype=application/pdf`

    axios.get(url, { responseType: 'blob', params: { 'mimeType': 'application/pdf' } })
      .then(res => {
        download(res.data, 'Rafee_Jenkins_CV.pdf', 'application/pdf')
      })
      .catch(error => console.debug('Error getting file'))
  }

  return (
    <Layout>
      <div className='pb-4'>
        <div className='pb-4'>
          <span className='text-2xl sm:text-4xl font-merri'>about</span>
        </div>
        <Card title="Hiya! I'm Rafee">
          <div className="m-8 order-first" role="img">
            <Image src={me} alt={'Another picture of Rafee...'} />
          </div>
          <div className='flex flex-col justify-between my-8'>
            <div className='text-lg'>
              Hiya there, my name is Rafee and I am a software developer.
              <br /><br />
              I have been programming since I was in high school, when I created my first  iPhone app and have been hooked ever since.
              <br />
              As you can tell from my <Link href={'/projects'}>projects</Link> page, I am a big fan of JavaScript and Python. 
              <br />
              I have a fundemental understanding of DevOps and Agile working. 
              I am also a fan of Cloud computing. I have experience with GCP, Firebase (used for this site) and I am Azure certified.
              <br /><br />
              When I am not coding, you can find me in the gym, baking pizzas or pickling onions.
            </div>
            <button onClick={() => lol()} className="hover:bg-darkp bg-gray-700 hover:text-white text-darkp px-3 py-2 rounded-md text-sm font-medium">
              <a className='px-auto' >
                Download my CV
              </a>
            </button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
