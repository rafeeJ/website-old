import React from 'react';
import Subscribe from './Subscribe';
import Image from 'next/image'



export default function Hero() {
  const me = require('../public/me.png')
  return (
    <div className="bg-offwhite">
      <div className="flex justify-center flex-col items-center sm:flex-row" role="main">

        <div className="m-8 sm:w-3/12 md:w-3/12 lg:w-1/5 order-last sm:order-first" role="img">
          <Image src={me} alt={'Phone Screenshot'} />
        </div>
        <div className="sm:px-8 mt-8 px-4 flex-grow sm:mr-30 md:mr-20">
          <h1
            className="text-5xl font-serif tracking-tight text-gray-900 leading-snug"
            role="heading"
            aria-level="1"
          >
            Hi, I'm Rafee.
          </h1>
          
          <p className="w-3/5 mt-2 text-gray-600 text-3xl font-serif" aria-level="2">
            I'm a computer science graduate working as a (graduate) software engineer at Lloyds Banking Group.
          </p>

          <p className="w-3/5 mt-4 text-gray-600 text-xl font-serif" aria-level="2">
            I am a big fan of tech, namely: React, React-Native, GoLang, and Python.
          </p>
          <div className="mt-2 flex" role="button">
          </div>
        </div>
      </div>
    </div>
  )
}
