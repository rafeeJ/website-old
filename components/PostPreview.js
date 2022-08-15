import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import Date from './Date'

export default function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
  }) {
  return (
    <div className='bg-white rounded-md p-8 shadow'>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}

      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/posts/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/* <Avatar author={author} /> */}
    </div>
  )
}
