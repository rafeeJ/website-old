import Link from 'next/link'
import React from 'react'

export default function HomePageCopy() {
    return (
        <div>
            <h1
                className="text-5xl font-merri tracking-tight text-gray-900 leading-snug"
                role="heading"
                aria-level="1"
            >
                Hi, I&apos;m Rafee.
            </h1>
            <p className="mt-2 text-gray-600 text-3xl font-merri" aria-level="2">
                I am a computer science graduate working as a (graduate) software engineer at Lloyds Banking Group.
            </p>

            <p className="mt-4 text-gray-800 text-md font-merri" aria-level="2">
                I am a big fan of tech, namely: React, React-Native, GoLang, and Python.
            </p>
            <p className="mt-4 text-gray-800 text-md font-merri" aria-level="2">
                You can read about some of my past and current projects over on the <Link href={'/projects'} className='font-extrabold underline text-darkp'>projects</Link> page.
            </p>
            <p className="mt-4 text-gray-800 text-md font-merri" aria-level="2">
                If you would like to get in touch, just tap the link in the footer!
            </p>
        </div>
    )
}
