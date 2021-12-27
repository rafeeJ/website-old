import React from 'react';
import Subscribe from './Subscribe';
import Image from 'next/image'



export default function Hero() {
  const me = require('../public/me.png')
  return (
    <div className="bg-offwhite">
      <div className="flex justify-center flex-col items-center lg:flex-row" role="main">

        <div className="m-8 order-first" role="img">
          <Image src={me} alt={'Phone Screenshot'} />
        </div>
        <div className="lg:px-8 px-4 flex-grow">
          <h1
            className="text-5xl font-merri tracking-tight text-gray-900 leading-snug"
            role="heading"
            aria-level="1"
          >
            Hi, I'm Rafee.
          </h1>

          <div className=''>
            <p className="mt-2 text-gray-600 text-3xl font-merri" aria-level="2">
              I'm a computer science graduate working as a (graduate) software engineer at Lloyds Banking Group.
            </p>

            <p className="mt-4 text-gray-600 text-xl font-merri" aria-level="2">
              I am a big fan of tech, namely: React, React-Native, GoLang, and Python.
            </p>
          </div>
          <div className="mt-2 flex" role="button">
          </div>
        </div>
      </div>
    </div>
  )
}
