import React from 'react'
import Link from 'next/link'
import Card from './Card'
import Date from './Date'


export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='bg-white rounded-md p-8 shadow'>
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
        <Link href={`blog/posts/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
      </h3>
      <br />
      <div className='font-merri'>
        <Date dateString={date} />
        <br />
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </div>
  )
}
