import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function CoverImage({ title, coverImage, slug }) {
  const myLoader=({src}) => {
    return `https://rafee-blog.azurewebsites.net${src}`
  }

  const image = (
    <Image
      width={2000}
      height={1000}
      loader={myLoader}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blog/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}